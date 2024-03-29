const hb = require("handlebars");
const fs = require("fs");
const ld = require("linkedom");
const prettify = require("js-beautify").html;

function add_card(document, title, description, image, id) {
    // this needs cleaning up!
    var hyper = document.createElement("a");
    hyper.href = `./project/${id}`;
    hyper.classList.add("project");
    hyper.classList.add("scroll-anim");
    hyper.id = "project-" + id.replace(/\s/g, "").replace(/\./g, "");
    hyper.style.backgroundImage = "url(\"" + image + "\")";
    var blocker = document.createElement("article");
    blocker.classList.add("project-blocker");
    var texttitle = document.createElement("p");
    // setting innerText is not implemented in linkedom, using textContent instead.
    texttitle.textContent = title;
    texttitle.classList.add("project-title");
    var textdescription = document.createElement("p");
    // setting innerText is not implemented in linkedom, using textContent instead.
    textdescription.textContent = description;
    textdescription.classList.add("project-description");
    blocker.appendChild(texttitle);
    blocker.appendChild(textdescription);
    hyper.appendChild(blocker);
    document.querySelector("#project-shelf").appendChild(hyper);
}

function rebuild_all() {
    let projects = JSON.parse(fs.readFileSync("./projects.json", "utf8")).projects;
    let project_ids = projects.map(p => { return p.id; });
    let project_template = fs.readFileSync("./src/project.handlebars", "utf8");

    let index_template = fs.readFileSync("./src/index.handlebars", "utf8");

    const { document } = ld.parseHTML("<!DOCTYPE html><html lang=\"en\"><body><div id=\"project-shelf\"></div></body></html>");

    let skills = JSON.parse(fs.readFileSync("./skills.json", "utf8"));
    let skills_template = fs.readFileSync("./src/skills.handlebars", "utf8");

    for (let i in project_ids) {
        let project = project_ids[i];
        let data = projects.find(p => { return p.id == project; });
        console.log("Compiling " + project);
        let compiled = hb.compile(project_template);
        let html = compiled(data);
        fs.writeFileSync(`./project/${project}.html`, html);
        console.log("Compiled " + project);
        console.log("Constructing project element for " + project);
        add_card(document, data.title, data.description, data.image, project);
        console.log("Constructed project element for " + project);
    }
    let live_list = fs.readdirSync("./project").filter(p => { return p.endsWith(".html") }).map(p => { return p.replace(/\.html$/, ""); });
    let old_project_ids = live_list.filter(p => { return !project_ids.includes(p); });
    for (let i in old_project_ids) {
        let project = old_project_ids[i];
        console.log("Project deleted, archiving: " + project);
        if (!fs.existsSync(`./project/_archive/`)) {
            fs.mkdirSync(`./project/_archive/`);
        }
        fs.renameSync(`./project/${project}.html`, `./project/_archive/${project}.html`);
        console.log("Archived " + project);
    }
    console.log("Compiling index");
    let project_html = prettify(document.querySelector("#project-shelf").innerHTML, { indent_size: 4, indent_char: " ", indent_level: 4 });
    let compiled = hb.compile(index_template);
    let html = compiled({ project_html: project_html });
    fs.writeFileSync(`./index.html`, html);
    console.log("Compiled index");
    console.log("Compiling skills");
    let compiled_skills = hb.compile(skills_template);
    let html_skills = compiled_skills({ skills: skills.skills, updated: skills.updated });
    fs.writeFileSync(`./skills/index.html`, html_skills);
    console.log("Compiled skills");
}

if (require.main === module) {
    rebuild_all();
}

module.exports = rebuild_all;