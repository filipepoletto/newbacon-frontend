function headerNavbar() {
    const navToggle = document.querySelector('header > nav');
    const navButton = navToggle.querySelector('.navbar-toggler');

    navButton.addEventListener('click', function () {
        navToggle.classList.toggle('active');
    });
}
headerNavbar();

function footerSubmenu() {
    const navFooter = document.querySelector('footer .navbar-nav');
    const navFooterItems = navFooter.querySelectorAll('li.nav-item');

    for (let navFooterItem of navFooter.children) {
        navFooterItem.addEventListener('mouseover', function () {
            for (let navFooterItem of navFooterItems) {
                navFooterItem.classList.remove('active');
            }
            navFooterItem.classList.add('active');
        });
    }
    navFooter.addEventListener('mouseout', function () {
        for (let navFooterItem of navFooterItems) {
            navFooterItem.classList.remove('active');
        }
    });
}
footerSubmenu();