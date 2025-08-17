const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav.links li')

    burger.addEventListener('click', () => {
            //näytä nav
        nav.classList.toggle('nav-active');

        //Burgerin animaatio
        burger.classList.toggle('toggle');
    });
}

navSlide();