// Яндекс карта!

ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map("map", {
        center: [59.924,30.385],
        zoom: 11,
        controls: []
    });

    myPlacemark = new ymaps.Placemark([59.973,30.311], {
        hintContent: 'CПБ!',
        balloonContent: 'Вкусняшки тут! :)'
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/content/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-22, -57]
    });
    myPlacemark2 = new ymaps.Placemark([59.944,30.380], {
        hintContent: 'CПБ!',
        balloonContent: 'Вкусняшки тут! :)'
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/content/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-22, -57]
    });
    myPlacemark3 = new ymaps.Placemark([59.914, 30.493], {
        hintContent: 'CПБ!',
        balloonContent: 'Вкусняшки тут! :)'
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/content/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-22, -57]
    });
    myPlacemark4 = new ymaps.Placemark([59.886,30.314], {
        hintContent: 'CПБ!',
        balloonContent: 'Вкусняшки тут! :)'
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/content/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-22, -57]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark).add(myPlacemark2).add(myPlacemark3).add(myPlacemark4);
}


// Меню первой секции!

var menuMain = document.getElementsByClassName('first-header__navigation')[0];
var menuSearch = document.getElementsByClassName('first-header__hamburger-link')[0];
menuSearch.onclick = function() {
    var active = menuMain.classList.value;
    if (active.indexOf('first-header__navigation-activ') === -1) {
        menuMain.classList.add('first-header__navigation-activ');

    } else {
        menuMain.classList.remove('first-header__navigation-activ');
    }
}


// Аккардеон команды!

$(document).ready(function () {
    var team = $('.team-accordeon__content');

    team.hide().prev().click(function() {
        team.not(this).slideUp(500, 'linear').removeClass('activ');
        $(this).next().not(':visible').slideDown(500, 'linear').addClass('activ');
    });      
})


// Аккардеон меню!

$(document).ready(function () {

    var menuLink = $('.menu-accordeon__link');
    
    menuLink.on('click', function (e) {
        e.preventDefault();

        var menuItem = $(e.target).closest('.menu-accordeon__item'),
            menuRemove = $('.menu-accordeon__item');

        if (menuItem.hasClass('menu-accordeon__item-activ')) {
            menuItem.removeClass('menu-accordeon__item-activ');
        } else {
            menuRemove.removeClass('menu-accordeon__item-activ');
            menuItem.addClass('menu-accordeon__item-activ');
        }
    });
        
})

// Смена экранов!

$(document).ready(function () {
    
    var screen = 0,
        container = $('.maincontent'),
        section = $('.section'),
        inscroll = false;

    $('.section:first-child').addClass('active');
    
    $('body').on('mousewheel', function(event) {

        var activeSection = section.filter('.active');
        
        if (!inscroll) {
            inscroll = true;
            
            if (event.deltaY > 0) {

                if (activeSection.prev().length) {
                    screen--;
                }

            } else {

                if (activeSection.next().length) {
                    screen++;
                }

            }
        
        }    

        var position = (-screen * 100) +'%';

        section.eq(screen).addClass('active').siblings().removeClass('active');
        container.css('top', position);

        setTimeout(function() {
            inscroll = false;
        }, 1300);
    });

    // navigation__link-select
    var navLink = $('.navigation__link'),
        navItem = $('.navigation__item');

        navItem.eq(section).addClass('navigation__link-select')
        .siblings().removeClass('navigation__link-select');
    
});

// Навигация по меню!

$(document).ready(function () {

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function() {
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('body, html').animate({scrollTop: bl_top}, 700);
        return false;
    });

})
