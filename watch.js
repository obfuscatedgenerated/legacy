const hb = require("handlebars");
const fs = require("fs");
const equal = require("fast-deep-equal");

const rebuild_all = require("./compile.js");

let projects = JSON.parse(fs.readFileSync("./projects.json", "utf8")).projects;
let project_ids = projects.map(p => { return p.id; });
let project_template = fs.readFileSync("./src/project.handlebars", "utf8");

fs.watchFile("./projects.json", (curr, prev) => {
    let old_projects = projects;
    let old_project_ids = project_ids;
    projects = JSON.parse(fs.readFileSync("./projects.json", "utf8")).projects;
    project_ids = projects.map(p => { return p.id; });
    for (let i in project_ids) {
        let project = project_ids[i];
        let data = projects.find(p => { return p.id == project; });
        if (old_project_ids.indexOf(project) == -1) {
            console.log("Found new project, compiling " + project);
            let compiled = hb.compile(project_template);
            let html = compiled(data);
            fs.writeFileSync(`./project/${project}.html`, html);
            console.log("Compiled " + project);
            continue;
        }
        let old_data = old_projects.find(p => { return p.id == project; });
        if (!equal(data, old_data)) {
            console.log("Project changed, recompiling " + project);
            let compiled = hb.compile(project_template);
            let html = compiled(data);
            fs.writeFileSync(`./project/${project}.html`, html);
            console.log("Recompiled " + project);
        }
    }
    for (let i in old_project_ids.filter(j => !project_ids.includes(j))) {
        let project = old_project_ids[i];
        console.log("Project deleted, archiving: " + project);
        if (!fs.existsSync(`./project/_archive/`)) {
            fs.mkdirSync(`./project/_archive/`);
        }
        fs.renameSync(`./project/${project}.html`, `./project/_archive/${project}.html`);
        console.log("Archived " + project);
    }
});

fs.watchFile("./src/project.handlebars", (curr, prev) => {
    let old_project_template = project_template;
    project_template = fs.readFileSync("./src/project.handlebars", "utf8");
    if (old_project_template !== project_template) {
        console.log("Project template changed, recompiling all projects");
        rebuild_all();
    }
});

fs.watchFile("./src/index.handlebars", (curr, prev) => {
    let old_index_template = index_template;
    index_template = fs.readFileSync("./src/index.handlebars", "utf8");
    if (old_index_template !== index_template) {
        console.log("Index template changed, recompiling all projects");
        rebuild_all();
    }
});