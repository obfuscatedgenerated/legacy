let back = document.querySelector("#back");
back.onclick = (e) => {
    e.preventDefault();
    document.body.classList.remove("fade-in-bg");
    document.body.classList.add("fade-out-bg");
    setTimeout(() => {
        window.location.assign(back.href);
    }, 250);
}