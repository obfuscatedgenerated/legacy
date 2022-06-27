const params = new URLSearchParams(window.location.search);

function init_project() {
    if (!params.has("id")) {
        document.querySelector("#project-title").innerText = "Missing project ID parameter.";
        return;
    }

    fetch("/public/projects.json").then(res => res.json()).then(data => {
        let projects = data.projects;
        let project_names = projects.map(p => p.id);

        if (project_names.length == 0) {
            document.querySelector("#project-title").innerText = "No projects exist (this is a bug).";
            return;
        }

        let id_lower = params.get("id").toLowerCase();
        if (!project_names.includes(id_lower)) {
            document.querySelector("#project-title").innerText = "Project not found.";
            return;
        }
        project_load(projects.find(p => p.id == id_lower));
    }).catch(err => {
        console.log(err);
        document.querySelector("#project-title").innerText = "Error loading projects.";
        return;
    });
}

function project_load(project_data) {
    document.querySelector("title").innerText = project_data.title;
    document.querySelectorAll(".favicon").forEach(e => e.href = project_data.favicon);
    document.querySelectorAll(".neaticon").forEach(e => e.href = project_data.icon);
    document.querySelector("#project-title").innerText = project_data.title;
    document.querySelector("#project-desc").innerText = project_data.description;
    document.querySelector("#project-img").src = project_data.image;
    document.querySelector("#example-img").src = project_data.example_img;
    document.body.style.cssText = `--bg: ${project_data.bg_image}`;
}

init_project();