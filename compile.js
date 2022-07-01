const hb = require("handlebars");
const fs = require("fs");


function rebuild_all() {
    let projects = JSON.parse(fs.readFileSync("./projects.json", "utf8")).projects;
    let project_ids = projects.map(p => { return p.id; });
    let project_template = fs.readFileSync("./src/project.handlebars", "utf8");

    for (let i in project_ids) {
        let project = project_ids[i];
        let data = projects.find(p => { return p.id == project; });
        console.log("Compiling " + project);
        let compiled = hb.compile(project_template);
        let html = compiled(data);
        fs.writeFileSync(`./project/${project}.html`, html);
        console.log("Compiled " + project);
    }
}

if (require.main === module) {
    rebuild_all();
}

module.exports = rebuild_all;