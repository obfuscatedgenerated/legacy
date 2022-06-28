const ro = new IntersectionObserver(el => {
    for (const e of el) {
        if (e.intersectionRatio > 0) {
            e.target.classList.add("visible");
        }
    }
});

document.querySelectorAll(".scroll-anim").forEach(el => {
    ro.observe(el);
});

window.addEventListener("pageshow", (e) => {
    if (e.persisted) {
        console.log("page was persisted");
        document.body.classList.remove("fade-out");
        document.body.classList.add("fade-in");
        setTimeout(() => {
            document.body.classList.remove("fade-in");
        }, 250);
    }
})

function link_transition(e, el) {
    e.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.location.assign(el.href);
    }, 250);
}

function add_card(title, description, image, id) {
    // this needs cleaning up!
    var hyper = document.createElement("a");
    hyper.href = `./project/${id}`;
    hyper.onclick = (e) => {link_transition(e, hyper)};
    hyper.classList.add("project");
    hyper.classList.add("scroll-anim");
    hyper.classList.add("fade-on-scroll");
    hyper.id = "project-" + title.replace(/\s/g, "").replace(/\./g, "");
    hyper.style.backgroundImage = "url(\"" + image + "\")";
    var blocker = document.createElement("div");
    blocker.classList.add("project-blocker");
    var texttitle = document.createElement("p");
    texttitle.innerText = title;
    texttitle.classList.add("project-title");
    var textdescription = document.createElement("p");
    textdescription.innerText = description;
    textdescription.classList.add("project-description");
    blocker.appendChild(texttitle);
    blocker.appendChild(textdescription);
    hyper.appendChild(blocker);
    blocker.onmouseenter = () => {
        document.querySelectorAll("#" + hyper.id + " > .project-blocker").forEach(el => {
            el.style.setProperty("--container-width", el.getBoundingClientRect().width);
        });
    }
    blocker.onmouseexit = () => {
        document.querySelectorAll("#" + hyper.id + " > .project-blocker").forEach(el => {
            el.style.setProperty("--container-width", el.getBoundingClientRect().width);
        });
    }
    blocker.addEventListener("touchstart", () => {
        document.querySelectorAll("#" + hyper.id + " > .project-blocker").forEach(el => {
            el.style.setProperty("--container-width", el.getBoundingClientRect().width);
        });
    });
    document.querySelector("#project-shelf").appendChild(hyper);
    ro.observe(hyper);
}

//alert("This page is under construction. Expect changes!")

// placeholder 
// for (let i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) {
//     add_card("placeholder_" + String(i), "Lorem ipsum, dolor sit amet, consectetur adipiscing elit.", "/public/logo.png", "https://example.com");
// }

fetch("/public/projects.json").then(res => res.json()).then(data => {
    for (let i in data.projects) {
        // spooky scary CLS sends shivers down your spine
        // this could be improved with a placeholder
        add_card(data.projects[i].title, data.projects[i].description, data.projects[i].image, data.projects[i].id);
    }
    if (window.matchMedia("screen and (max-width: 768px)").matches) {
        document.querySelectorAll(".project-blocker").forEach(el => {
            el.style.setProperty("--container-width", el.getBoundingClientRect().width);
        });
    }
}).catch(err => {
    console.log(err);
    // as much as I demonise innerHTML over innerText and inline styles over a sheet, it's not worth the hassle for something without user interaction
    document.querySelector("#project-shelf").innerHTML = "<h2>Error loading projects. Please try again later, or <a style=\"color: #fff;\" href=\"/public/projects.json\">view the raw JSON data</a>.</h2>";
});

window.onresize = () => {
    if (window.matchMedia("screen and (max-width: 768px)").matches) {
        document.querySelectorAll(".project-blocker").forEach(el => {
            el.style.setProperty("--container-width", el.getBoundingClientRect().width);
        });
    }
};

//if (window.location.hash == "#robert") {
//    setTimeout(() => {document.querySelector("#robert").scrollIntoView();}, 1500); // makes it reappear in case it's the first view (because content is added and moved for the first time)
//}