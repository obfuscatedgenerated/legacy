import * as moment from 'moment';

let js_style = document.createElement("style");
js_style.innerHTML = `.if-js { visibility: inherit; }`;
document.head.appendChild(js_style);

let sortable = document.querySelectorAll(".sortable");
sortable.forEach((x) => { x.addEventListener("click", () => { sort(x); }); });
let selected = null;
let selected_dir = false; // false=asc, true=desc

const number_first_collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

let dates = new Map();

document.querySelectorAll(".time-content").forEach((el: HTMLParagraphElement) => {
    let date = moment(el.innerText, "DD/MM/YYYY");
    if (date.isValid()) {
        dates.set(el.parentElement.parentElement.id, date.unix());
        el.title = el.innerText;
        el.innerText = date.fromNow();
    } else {
        dates.set(el.parentElement.parentElement.id, -1);
    }
});

let up: HTMLParagraphElement = document.querySelector("#updated");
up.innerText = "Last updated: " + moment(up.innerText, "DD/MM/YYYY").format("LL") + ". Intervals automatically increment with JavaScript enabled. Hover intervals for a rough start date.";

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

    let column_name = Array.from(column_el.classList).reduce((x: string) => { if (x.endsWith("-head")) { return x.replace("-head", ""); } });

    let rows = document.querySelectorAll("." + column_name);
    let rows_by_property: { [key: string]: HTMLElement } = {};
    rows.forEach((el) => {
        let label: (string | number) = (el.querySelector("." + column_name + "-content") as HTMLElement).innerText;
        if (column_name === "experience") {
            switch (label) {
                case "Learning":
                    label = 0;
                    break;
                case "Developing":
                    label = 1;
                    break;
                case "Skilled":
                    label = 2;
                    break;
                case "Expert":
                    label = 3;
                    break;
                default:
                    console.warn("Unknown experience label: " + label);
                    label = -1;
                    break;
            };
        } else if (column_name === "time") {
            label = dates.get(el.parentElement.id);
        }
        let row = el.parentElement;
        rows_by_property[label + (row.querySelector(".name-content") as HTMLParagraphElement).innerText] = row; // prevents overlap as a "tiebreaker"
    });

    let entries = Object.entries(rows_by_property);
    // @ts-ignore:  Argument of type '(x: string, y: string) => number' is not assignable to parameter of type '(a: [string, HTMLElement], b: [string, HTMLElement]) => number'
    // ignore because it needs to sort by first of each array but still sort the whole array
    entries.sort(number_first_collator.compare);

    if (selected_dir) { entries.reverse(); }

    document.querySelector("tbody").innerHTML = "";
    entries.forEach(([label, row]: [string, HTMLElement]) => {
        document.querySelector("tbody").appendChild(row);
    });
}

// messy conversion to ts! needs refactor