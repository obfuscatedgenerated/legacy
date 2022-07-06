let js_style = document.createElement("style");
js_style.innerHTML = `.if-js { visibility: inherit; }`;
document.head.appendChild(js_style);

let sortable = document.querySelectorAll(".sortable");
sortable.forEach((x) => { x.addEventListener("click", () => { sort(x); }); });
let selected = null;
let selected_dir = false; // false=asc, true=desc

function sort(column_el) {
    let old_class_rm = selected_dir ? "fa-caret-up" : "fa-caret-down";
    if (selected !== column_el) {
        if (selected) { selected.querySelector("i").classList.remove(old_class_rm); selected.querySelector("i").classList.add("fa-minus"); }
        selected = column_el;
        selected.querySelector("i").classList.remove("fa-minus");
        selected_dir = false; // reset
    } else {
        selected_dir = !selected_dir;
    }
    let class_rm = selected_dir ? "fa-caret-up" : "fa-caret-down";
    let class_add = selected_dir ? "fa-caret-down" : "fa-caret-up";
    column_el.querySelector("i").classList.remove(class_rm);
    column_el.querySelector("i").classList.add(class_add);

    let column_name = Array.from(column_el.classList).reduce(x => { if (x.endsWith("-head")) { return x.replace("-head", ""); } });
    console.log("Sorting " + column_name);
}