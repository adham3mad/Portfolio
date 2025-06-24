
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Your message has been sent successfully!");
        this.reset();
    });
});

function applyClassOnView(selector, className) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
            } else {
                entry.target.classList.remove(className);
            }
        });
    }, {
        threshold: 0.2
    });

    selector.forEach(el => observer.observe(el));
}
const sections = document.querySelectorAll('.an');
applyClassOnView(sections, 'visable');

const pjr = document.querySelectorAll('.pjr');
applyClassOnView(pjr, 'visable');

const pjl = document.querySelectorAll('.pjl');
applyClassOnView(pjl, 'visable');