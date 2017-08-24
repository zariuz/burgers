$(function() {
    var sections = $('.section'),
        display = $('.maincontent'),
        inScroll = false;
    
    var performTransition = function (sectionEq) {

        if (inScroll) return
        inScroll = true;

        var position = (sectionEq * -100) + '%';
        
        display.css({
            'transform' : 'translateY(' + position + ')',
            '-webkit-transform' : 'translateY(' + position + ')'
        })

        sections.eq(sectionEq).addClass('active')
            .siblings().removeClass('active');

        setTimeout(function () {
            inScroll = false;
            $('.navigation__item').eq(sectionEq).addClass('active')
            .siblings().removeClass('active');
        }, 1300);

    }

    $('.wrapper').on('wheel', function (e) {

        var deltaY = e.originalEvent.deltaY;
        var activeSection = sections.filter('.active');
        var nextSection = activeSection.next();
        var prevSection = activeSection.prev();

        if (deltaY > 0 && nextSection.length) {
            console.log('вверх');
            performTransition(nextSection.index());
        }

        if (deltaY < 0 && prevSection.length) {
            console.log('вниз');
            performTransition(prevSection.index());
        }

    })

});