/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/project.ts ***!
  \************************/
var back = document.querySelector("#back");
back.onclick = function (e) {
    e.preventDefault();
    document.body.classList.remove("fade-in-bg");
    document.body.classList.add("fade-out-bg");
    setTimeout(function () {
        window.location.assign(back.href);
    }, 250);
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJLElBQUksR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQUMsQ0FBQztJQUNiLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuQixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0MsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNDLFVBQVUsQ0FBQztRQUNQLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDWixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGJhY2s6IEhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYWNrXCIpO1xyXG5iYWNrLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZS1pbi1iZ1wiKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImZhZGUtb3V0LWJnXCIpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihiYWNrLmhyZWYpO1xyXG4gICAgfSwgMjUwKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==