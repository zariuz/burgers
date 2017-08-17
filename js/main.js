// Меню первой секции!

//$(document).ready(function() {
    
//     $('.animate').on('click', function(e){
//         e.preventDefault()
//          $('.block').slideToggle(3000);
//        })

// }

var menu = document.getElementsByClassName('first-header__navigation')[0];

var menuAccord = document.getElementsByClassName('first-header__hamburger-link')[0];
menuAccord.onclick = function() {
    var active = menu.classList.value;
    if (active.indexOf('first-header__navigation-activ') === -1) {
        menu.classList.add('first-header__navigation-activ');

    } else {
        menu.classList.remove('first-header__navigation-activ');
    }
}