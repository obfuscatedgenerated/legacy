import { textVide } from "text-vide";

export let makeContentBionic = (): void => {
    let body = document.body;

    if (body.dataset.bionic === "true") {
        console.warn("Content is already bionic");
        return;
    }

    body.dataset.bionic = "true";
    body.innerHTML = textVide(body.innerHTML);

    let style = document.createElement("style");
    style.innerHTML = `
    * {
        font-family: OpenDyslexic3, "OpenDyslexic3", "Comic Sans MS", Arial, sans-serif;
    }

    *:not(b) {
        font-weight: normal;
        color: #aaa;
    }
    .project-title:not(b), .project-description:not(b) {
        font-weight: normal !important;
        color: #ccc !important;
    }

    b {
        color: #fff !important;
    }


    .project-blocker {
        background: #000;
    }
    .project-blocker:hover {
        opacity: 1;
    }
    `;
    document.head.appendChild(style);

    document.querySelectorAll(".scroll-anim").forEach(el => {
        el.classList.add("visible");
    });
}