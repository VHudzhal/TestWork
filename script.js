jQuery(document).ready(function () {
    jQuery.pixlayout({
        clip: true, src: "gcs_home.png", show: false, center: true, top: 0, left: 0, pervious: false
    });
})
window.addEventListener("load", function () {
        var e = document.querySelector(".toggle-collapse span"), t = document.querySelector(".nav");
        e.onclick = function (e) {
            t.classList.toggle("collapse"), e.target.classList.toggle("toggle-click")
        };
})
