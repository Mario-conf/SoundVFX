document.getElementById("currentYear").innerText = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
    animateElements();
});

function animateElements() {
    animateSection("#about h2", "fadeInDown");
    animateSection("#about p", "fadeInUp");
    animateSection("#about .logos img", "zoomIn");

    animateSection("#products h2", "fadeInDown");
    animateSection("#products .card", "fadeInUp");

    animateSection("#documentation h2", "fadeInDown");
    animateSection("#documentation p", "fadeInUp");
    animateSection("#documentation a", "fadeInUp");
}

function animateSection(selector, animation) {
    let elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
        element.classList.add("animated", animation);
    });
}
