

const links = document.querySelectorAll('.nav-item');


links.forEach((link) => {
    link.addEventListener('click', () => {
        resetActiveLink();
        link.classList.add('active-navlink');
    });
});

function resetActiveLink() {
    links.forEach((link) => link.classList.remove('active-navlink'));
}



const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight / 2.3 )) {
            current = section.getAttribute('id');

        }
        console.log(current);
    });

    resetActiveLink();

    links.forEach(link => {
        if (link.classList.contains(current)) {
            link.classList.add('active-navlink')
        }
    });
})