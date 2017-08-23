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


    // Смена секций!

    

    $(function() {

        var sections = $('.section'),
            visible = $('.maincontent'),
            inScroll = false;

            var md = new MobileDetect(window.navigator.userAgent),
            isMobile = md.mobile();

        var performTransition = function (sectionEq) {
          
            if(!inScroll) {
                inScroll = true;

                var sectionEq = sectionEq - 1 ;
                var position = (sectionEq * -100) + '%';
                
                visible.css({
                    'transform' : 'translateY(' + position + ')',
                    '-webkit-transform' : 'translateY(' + position + ')'
                })
    
                sections.eq(sectionEq).addClass('active')
                .siblings().removeClass('active');

                setTimeout(function() {
                    inScroll = false;
                    $('.navigation__item').eq(sectionEq).addClass('active')
                    .siblings().removeClass('active');
                }, 1300)

            }
                
        }
    
        var defineSections = function(sections) {
            var activeSection = sections.filter('.active');
            return {
                activeSection : activeSection,
                nextSection : activeSection.next(),
                prevSection : activeSection.prev()
            }
        }

        var scrollToSection = function(direction) {
            var section = defineSections(sections);
            
            if (direction == 'up' && section.nextSection.length) { /*вниз*/
                
                performTransition(section.nextSection.index());
            } 
            
            if (direction == 'down' && section.prevSection.prev().length) { /*вверх*/   
                performTransition(section.prevSection.index());
            }

        }



        $('.wrapper').on({
            'wheel': function(e) {
                var deltaY = e.originalEvent.deltaY,
                direction = "";

                var direction = deltaY > 0 
                ? direction = 'up'
                : direction = 'down';

                scrollToSection(direction);
            },

            touchmove: function(e) {
                e.preventDefault();
            }
        })
            

        $(document).on('keydown', function (e) {
            var section = defineSections(sections);
            
            
            switch (e.keyCode) {
                case 38: /*вверх*/
                    if (section.prevSection.prev().length) {
                        performTransition(section.prevSection.index());
                    }
                    break;
                case 40: /*вниз*/
                    if (section.nextSection.length) {
                        performTransition(section.nextSection.index());
                    }
                    break;
            }


        })

        // Меню навигации
            

        $('.navigation__link').on('click', function (e) {
        
            e.preventDefault();

            var elem = $(e.target),
            bullets = $('.navigation__item'),
            bulletTarget = elem.closest(bullets),            
            bulletEq = bulletTarget.index();

            performTransition(bulletEq + 1);
        })

        $('.first-header__link').on('click', function (e) {
            
            e.preventDefault();

            var elem = $(e.target),
            elemId = elem.attr('href'),
            sectionEq = parseInt(sections.filter(elemId).index());
            performTransition(sectionEq);  
            
        })
        
        // Движение по секциям 

        $('.first-next__down').on('click', function(e) {
            e.preventDefault();
            performTransition(2);
        });

        $('.order-link').on('click', function(e) {
            e.preventDefault();
            performTransition(7);
        });

        if (isMobile) {
            $(window).swipe({
                swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
                    scrollToSection(direction);
                }
            });            
        }
        
    })



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



