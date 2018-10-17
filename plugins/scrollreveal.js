import ScrollReveal from 'scrollreveal'

const addAnimation = el => {
    el.classList.remove('fadeInUp');
    el.classList.add('fadeInUp');
}

const nodeArray = [
    ...document.querySelectorAll('.in-animate'),
    ...document.querySelectorAll('h4'),
    ...document.querySelectorAll('img:not(.not-animate)'),
    ...document.querySelectorAll('.socail-icon'),
    ...document.querySelectorAll('.timeline-event'),
];
ScrollReveal().reveal(nodeArray, {
    beforeReveal: addAnimation
})
