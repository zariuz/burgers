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


$(document).ready(function () {

    // Аккардеон меню!

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


       //Слайдер


    function slider(test) {
        
        var sliderBurger = $('.burger-box'),
            sliderList = sliderBurger.find('.burger-box__menu'),
            sliderItem = sliderBurger.find('.burger-box__item'),
            sliderActive = sliderItem.filter('.burger-box__item-active'),
            nextItem = sliderActive.next(),
            nextNumberItem = nextItem.index(),
            backItem = sliderActive.prev(),
            backNumberItem = backItem.index(),
            slideTime = 700;
        
        
        if (test == 'next') {

            if (!nextItem.length) {
                nextItem = sliderItem.first();
                nextNumberItem = nextItem.index();
            }
            var next = -nextNumberItem * 100 + '%';
            sliderList.stop(true).animate({
                'left': next
            }, slideTime, function () {
                sliderActive.removeClass('burger-box__item-active');
                nextItem.addClass('burger-box__item-active');
            });
        }
        
        if (test == 'back') {

            if (!backItem.length) {
                backItem = sliderItem.last();
                backNumberItem = backItem.index();
            }
            var back = -backNumberItem * 100 + '%';

            sliderList.stop(true).animate({
                'left': back
            }, slideTime, function () {
                sliderActive.removeClass('burger-box__item-active');
                backItem.addClass('burger-box__item-active');
            });
        }
    }
        
        
    $('.burger-box__right').on('click', function () {
        slider('next');
    });

    $('.burger-box__left').on('click', function () {
        slider('back');
    });


    // Модалки

    $(function() {
        $("[data-fancybox]").fancybox({
            smallBtn: false,
            toolbar: false
        });
            
        $('.modal__close').on('click', function(e) {
            e.preventDefault();
            $.fancybox.close()
        })

    })
    

})

// Форма 
var inp = $('input');

$('.form-order__input > .form-order__input-name').mask('+7 (999) 999-9999');


$('.form-main__form').on('submit', function(e) {
    e.preventDefault();
    var $form = $(this),
        trigger = 0,
        ajaxForm = function () {
        $.ajax({
            type: 'POST',
            url: '../server.php',
            data: $form.serialize(),
            dataType: 'JSON',
            cache: false,
            success: function (msg) {
                $('.form-modal').css('display', 'block').animate({
                    'opacity': 1
                }, 300);
            },
            error: function (jqXHR, textStatus) {
                console.log('Request failed: not server');
            }
        })
    };    

    inp.each(function () {
        var $this = $(this);

        inp.addClass('validation');

        if ( $this.hasClass('validation') ) {
            if ( $this.val() === "" || $this.val() === " " ) {
                $this.css('border', '2px solid red');
                return trigger = 1;
            }
        }
    })
    
    if (trigger === 0) {
        ajaxForm();
        console.log('success');
    };
});

$('.form-modal__but').on('click', function(e) {
    e.preventDefault();
    $('.form-modal').animate({
        'opacity': 0
    }, 500, function () {
        $('.form-modal').css('display', 'none');
    });
    $('form').get(0).reset();
    inp.removeAttr('style');
})



