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

