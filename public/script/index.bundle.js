/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
var params = new URLSearchParams(window.location.search);
var ro = new IntersectionObserver(function (el) {
    for (var _i = 0, el_1 = el; _i < el_1.length; _i++) {
        var e = el_1[_i];
        if (e.intersectionRatio > 0) {
            e.target.classList.add("visible");
        }
    }
});
document.querySelectorAll(".scroll-anim").forEach(function (el) {
    el.classList.add("fade-on-scroll");
    ro.observe(el);
});
function clean_fade_in() {
    document.body.classList.remove("fade-out");
    document.body.classList.add("fade-in");
    setTimeout(function () {
        document.body.classList.remove("fade-in");
    }, 250);
}
window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
        console.log("page was persisted");
        clean_fade_in();
    }
});
if (params.has("fade-in")) {
    clean_fade_in();
}
function link_transition(e, el) {
    e.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(function () {
        window.location.assign(el.href);
    }, 250);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUUzRCxJQUFNLEVBQUUsR0FBRyxJQUFJLG9CQUFvQixDQUFDLFlBQUU7SUFDbEMsS0FBZ0IsVUFBRSxFQUFGLFNBQUUsRUFBRixnQkFBRSxFQUFGLElBQUUsRUFBRTtRQUFmLElBQU0sQ0FBQztRQUNSLElBQUksQ0FBQyxDQUFDLGlCQUFpQixHQUFHLENBQUMsRUFBRTtZQUN6QixDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDckM7S0FDSjtBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFFO0lBQ2hELEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQztBQUVILFNBQVMsYUFBYTtJQUNsQixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLFVBQVUsQ0FBQztRQUNQLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDWixDQUFDO0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUM7SUFDbEMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLGFBQWEsRUFBRSxDQUFDO0tBQ25CO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7SUFDdkIsYUFBYSxFQUFFLENBQUM7Q0FDbkI7QUFFRCxTQUFTLGVBQWUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUMxQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkIsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLFVBQVUsQ0FBQztRQUNQLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDWixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblxyXG5jb25zdCBybyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbCA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IGUgb2YgZWwpIHtcclxuICAgICAgICBpZiAoZS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2Nyb2xsLWFuaW1cIikuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwiZmFkZS1vbi1zY3JvbGxcIik7IC8vIHRoZXJlZm9yZSBvbmx5IHdvcmtzIHdpdGgganMgb25cclxuICAgIHJvLm9ic2VydmUoZWwpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNsZWFuX2ZhZGVfaW4oKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlLW91dFwiKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImZhZGUtaW5cIik7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlLWluXCIpO1xyXG4gICAgfSwgMjUwKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlc2hvd1wiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUucGVyc2lzdGVkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYWdlIHdhcyBwZXJzaXN0ZWRcIik7XHJcbiAgICAgICAgY2xlYW5fZmFkZV9pbigpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmlmIChwYXJhbXMuaGFzKFwiZmFkZS1pblwiKSkge1xyXG4gICAgY2xlYW5fZmFkZV9pbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsaW5rX3RyYW5zaXRpb24oZSwgZWwpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImZhZGUtb3V0XCIpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihlbC5ocmVmKTtcclxuICAgIH0sIDI1MCk7XHJcbn1cclxuXHJcbi8vZnVuY3Rpb24gYWRkX2NhcmQodGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZSwgaWQpIHtcclxuLy8gICAgLy8gdGhpcyBuZWVkcyBjbGVhbmluZyB1cCFcclxuLy8gICAgdmFyIGh5cGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbi8vICAgIGh5cGVyLmhyZWYgPSBgLi9wcm9qZWN0LyR7aWR9YDtcclxuLy8gICAgaHlwZXIub25jbGljayA9IChlKSA9PiB7IGxpbmtfdHJhbnNpdGlvbihlLCBoeXBlcikgfTtcclxuLy8gICAgaHlwZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XHJcbi8vICAgIGh5cGVyLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtYW5pbVwiKTtcclxuLy8gICAgaHlwZXIuY2xhc3NMaXN0LmFkZChcImZhZGUtb24tc2Nyb2xsXCIpO1xyXG4vLyAgICBoeXBlci5pZCA9IFwicHJvamVjdC1cIiArIGlkLnJlcGxhY2UoL1xccy9nLCBcIlwiKS5yZXBsYWNlKC9cXC4vZywgXCJcIik7XHJcbi8vICAgIGh5cGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFxcXCJcIiArIGltYWdlICsgXCJcXFwiKVwiO1xyXG4vLyAgICB2YXIgYmxvY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbi8vICAgIGJsb2NrZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYmxvY2tlclwiKTtcclxuLy8gICAgdmFyIHRleHR0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4vLyAgICB0ZXh0dGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XHJcbi8vICAgIHRleHR0aXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcclxuLy8gICAgdmFyIHRleHRkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4vLyAgICB0ZXh0ZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb247XHJcbi8vICAgIHRleHRkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZXNjcmlwdGlvblwiKTtcclxuLy8gICAgYmxvY2tlci5hcHBlbmRDaGlsZCh0ZXh0dGl0bGUpO1xyXG4vLyAgICBibG9ja2VyLmFwcGVuZENoaWxkKHRleHRkZXNjcmlwdGlvbik7XHJcbi8vICAgIGh5cGVyLmFwcGVuZENoaWxkKGJsb2NrZXIpO1xyXG4vLyAgICBibG9ja2VyLm9ubW91c2VlbnRlciA9ICgpID0+IHtcclxuLy8gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjXCIgKyBoeXBlci5pZCArIFwiID4gLnByb2plY3QtYmxvY2tlclwiKS5mb3JFYWNoKGVsID0+IHtcclxuLy8gICAgICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY29udGFpbmVyLXdpZHRoXCIsIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKTtcclxuLy8gICAgICAgIH0pO1xyXG4vLyAgICB9XHJcbi8vICAgIGJsb2NrZXIub25tb3VzZWV4aXQgPSAoKSA9PiB7XHJcbi8vICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI1wiICsgaHlwZXIuaWQgKyBcIiA+IC5wcm9qZWN0LWJsb2NrZXJcIikuZm9yRWFjaChlbCA9PiB7XHJcbi8vICAgICAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNvbnRhaW5lci13aWR0aFwiLCBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk7XHJcbi8vICAgICAgICB9KTtcclxuLy8gICAgfVxyXG4vLyAgICBibG9ja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsICgpID0+IHtcclxuLy8gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjXCIgKyBoeXBlci5pZCArIFwiID4gLnByb2plY3QtYmxvY2tlclwiKS5mb3JFYWNoKGVsID0+IHtcclxuLy8gICAgICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY29udGFpbmVyLXdpZHRoXCIsIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKTtcclxuLy8gICAgICAgIH0pO1xyXG4vLyAgICB9KTtcclxuLy8gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXNoZWxmXCIpLmFwcGVuZENoaWxkKGh5cGVyKTtcclxuLy8gICAgcm8ub2JzZXJ2ZShoeXBlcik7XHJcbi8vICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gXCIjXCIgKyBoeXBlci5pZCkge1xyXG4vLyAgICAgICAgaHlwZXIuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XHJcbi8vICAgICAgICBoeXBlci5zY3JvbGxJbnRvVmlldygpO1xyXG4vLyAgICB9XHJcbi8vfVxyXG5cclxuLy9hbGVydChcIlRoaXMgcGFnZSBpcyB1bmRlciBjb25zdHJ1Y3Rpb24uIEV4cGVjdCBjaGFuZ2VzIVwiKVxyXG5cclxuLy8gcGxhY2Vob2xkZXIgXHJcbi8vIGZvciAobGV0IGkgaW4gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMV0pIHtcclxuLy8gICAgIGFkZF9jYXJkKFwicGxhY2Vob2xkZXJfXCIgKyBTdHJpbmcoaSksIFwiTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXCIsIFwiL3B1YmxpYy9sb2dvLnBuZ1wiLCBcImh0dHBzOi8vZXhhbXBsZS5jb21cIik7XHJcbi8vIH1cclxuXHJcbi8vZmV0Y2goXCIvcHVibGljL3Byb2plY3RzLmpzb25cIikudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihkYXRhID0+IHtcclxuLy8gICAgZm9yIChsZXQgaSBpbiBkYXRhLnByb2plY3RzKSB7XHJcbi8vICAgICAgICAvLyBzcG9va3kgc2NhcnkgQ0xTIHNlbmRzIHNoaXZlcnMgZG93biB5b3VyIHNwaW5lXHJcbi8vICAgICAgICAvLyB0aGlzIGNvdWxkIGJlIGltcHJvdmVkIHdpdGggYSBwbGFjZWhvbGRlclxyXG4vLyAgICAgICAgLy8gb3Igd2UgY291bGQgcHJlYmFrZSB3aXRoIGhhbmRsZWJhcnMsIGFsc28gcHJldmVudHMgaGF2aW5nIHRvIG92ZXJyaWRlIHRoZSBoYXNoIHNjcm9sbCB2aWEganMgYXMgdGhlIGVsZW1lbnQgaXMgYXZhaWxhYmxlIGF0IGZpcnN0IHBhaW50XHJcbi8vICAgICAgICBhZGRfY2FyZChkYXRhLnByb2plY3RzW2ldLnRpdGxlLCBkYXRhLnByb2plY3RzW2ldLmRlc2NyaXB0aW9uLCBkYXRhLnByb2plY3RzW2ldLmltYWdlLCBkYXRhLnByb2plY3RzW2ldLmlkKTtcclxuLy8gICAgfVxyXG4vLyAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KVwiKS5tYXRjaGVzKSB7XHJcbi8vICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtYmxvY2tlclwiKS5mb3JFYWNoKGVsID0+IHtcclxuLy8gICAgICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY29udGFpbmVyLXdpZHRoXCIsIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKTtcclxuLy8gICAgICAgIH0pO1xyXG4vLyAgICB9XHJcbi8vfSkuY2F0Y2goZXJyID0+IHtcclxuLy8gICAgY29uc29sZS5sb2coZXJyKTtcclxuLy8gICAgLy8gYXMgbXVjaCBhcyBJIGRlbW9uaXNlIGlubmVySFRNTCBvdmVyIGlubmVyVGV4dCBhbmQgaW5saW5lIHN0eWxlcyBvdmVyIGEgc2hlZXQsIGl0J3Mgbm90IHdvcnRoIHRoZSBoYXNzbGUgZm9yIHNvbWV0aGluZyB3aXRob3V0IHVzZXIgaW50ZXJhY3Rpb25cclxuLy8gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXNoZWxmXCIpLmlubmVySFRNTCA9IFwiPGgyPkVycm9yIGxvYWRpbmcgcHJvamVjdHMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIsIG9yIDxhIHN0eWxlPVxcXCJjb2xvcjogI2ZmZjtcXFwiIGhyZWY9XFxcIi9wdWJsaWMvcHJvamVjdHMuanNvblxcXCI+dmlldyB0aGUgcmF3IEpTT04gZGF0YTwvYT4uPC9oMj5cIjtcclxuLy99KTtcclxuXHJcbi8vaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09IFwiI3JvYmVydFwiKSB7XHJcbi8vICAgIHNldFRpbWVvdXQoKCkgPT4ge2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9iZXJ0XCIpLnNjcm9sbEludG9WaWV3KCk7fSwgMTUwMCk7IC8vIG1ha2VzIGl0IHJlYXBwZWFyIGluIGNhc2UgaXQncyB0aGUgZmlyc3QgdmlldyAoYmVjYXVzZSBjb250ZW50IGlzIGFkZGVkIGFuZCBtb3ZlZCBmb3IgdGhlIGZpcnN0IHRpbWUpXHJcbi8vfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==