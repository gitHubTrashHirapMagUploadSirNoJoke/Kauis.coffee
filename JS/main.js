let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
    } else {
        document.querySelector("header").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}

window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
const elements = document.querySelectorAll('.text, .hero');

elements.forEach(element => {
if (isElementInViewport(element)) {
    element.classList.add('revealed');
}
});
}

function isElementInViewport(el) {
const rect = el.getBoundingClientRect();
return (
rect.top >= 0 &&
rect.left >= 0 &&
rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}