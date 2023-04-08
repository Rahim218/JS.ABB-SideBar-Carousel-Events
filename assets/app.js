
/* Header-Top  start*/

let search = document.querySelector('.right-con .search');
let dropSearch = document.querySelector('.search-drop');
let kress = document.querySelector('.search-drop i')

let dropdown = document.querySelector('.lang')
let dropdown_menu = document.querySelector('.dropdown_menu');
let arrowIcom = document.querySelector('.lang i')

let searchIcon = document.querySelector('.search i');
let searchSpan = document.querySelector('.search span')



function ShowHide() {

    if (dropSearch.classList.contains('d-none')) {
        dropSearch.className = 'search-drop d-flex align-items-center gap-5';
    }
    else {
        dropSearch.className = 'search-drop d-flex align-items-center gap-5 d-none';
    }

}

search.addEventListener('click', function (e) {
    ShowHide()
    if (searchIcon.style.color != 'rgb(175, 175, 176)') {
        searchIcon.style.color = 'rgb(175, 175, 176)'
        searchSpan.style.color = 'rgb(175, 175, 176)'
    }
    else {
        searchIcon.style.color = 'rgb(14,127,198)'
        searchSpan.style.color = 'rgb(14,127,198)'

    }
    e.stopPropagation();

})
kress.addEventListener('click', function (e) {
    ShowHide()
    if (searchIcon.style.color != 'rgb(175, 175, 176)') {
        searchIcon.style.color = 'rgb(175, 175, 176)'
        searchSpan.style.color = 'rgb(175, 175, 176)'
    }
    else {
        searchIcon.style.color = 'rgb(14,127,198)'
        searchSpan.style.color = 'rgb(14,127,198)'

    }
    e.stopPropagation();

})

dropdown.addEventListener('click', function () {
    if (arrowIcom.style.transform == 'rotateX(180deg)') {
        arrowIcom.style.transform = 'rotateX(0deg)'
    } else {
        arrowIcom.style.transform = 'rotateX(180deg)';

    }
    if (dropdown_menu.classList.contains('d-none')) {
        dropdown_menu.className = 'dropdown_menu'
    }
    else {
        dropdown_menu.className = 'dropdown_menu d-none'

    }


})

/* Header-Top end*/


/*Header-Center start*/

let hamDiv = document.querySelector('.bars')
let bars = document.querySelector('#hamburger');
let x = document.querySelector('#kres')
let header_bottom = document.querySelector('#header-bottom');
let nav = document.querySelector('nav')
let inthernet = document.querySelector('.internet')
let point = document.querySelectorAll( '.dots div' )

hamDiv.addEventListener('click', function () {



    if (x.classList.contains('d-none')) {
        x.className = 'fa-solid fa-x'
        bars.className = 'd-none'
        header_bottom.style.right = '0px';
        header_bottom.style.display = 'block';
        nav.style.right = '0px';
        nav.style.display = 'flex';
        inthernet.style.right = '0px';
        inthernet.style.opacity = '1';
        for(let dot of point){
            dot.style.zIndex='-1'
        }



    }
    else {
        bars.className = 'fa-solid fa-bars'
        x.className = 'fa-solid fa-x d-none'
        header_bottom.style.right = '-1000px'
        header_bottom.style.display = 'none';

        nav.style.right = '-1000px'
        nav.style.display = 'none';

        inthernet.style.opacity = '0';
        for(let dot of point){
            dot.style.zIndex='1'
        }

    }



})










/*Header-Center end*/


/*Carousel start*/

let dots = document.querySelectorAll('.dots div')



for (let dot of dots) {
    dot.addEventListener('click', function () {
        let active = document.querySelector('.active');

        active.classList.remove('active')
        this.classList.add('active')
        let id = this.id;

        let carousel_item = document.querySelectorAll('.carousel-container .slide')
        for (let item of carousel_item) {

            if (item.getAttribute('data-id') === id) {
                item.classList.remove('d-none')
            } else {

                item.classList.add('d-none')

            }
        }


    })
}
/*Carousel end*/













