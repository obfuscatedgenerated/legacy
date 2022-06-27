const hb = require("handlebars");
const fs = require("fs");

let projects = JSON.parse(fs.readFileSync("./public/projects.json", "utf8")).projects;
let project_ids = projects.map(p => { return p.id; });
let template = fs.readFileSync("./project-src/template.handlebars", "utf8");

for (let i in project_ids) {
    let project = project_ids[i];
    let data = projects.find(p => { return p.id == project; });
    console.log("Compiling " + project);
    let compiled = hb.compile(template);
    let html = compiled(data);
    fs.writeFileSync(`./project/${project}.html`, html);
    console.log("Compiled " + project);
}