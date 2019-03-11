//----------------------SEARCHE---------------------//

const search = document.querySelector('.search');
const body = document.querySelector('.body');
// let header__nav = document.getElementsByClassName("header__nav--menu")[0];

search.addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.add('search--active');
    // header__nav.classList.toggle("header__nav--menu");
});

body.addEventListener('click', function () {
    search.classList.remove('search--active');
});