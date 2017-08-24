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

    var defineSections = function (sections) {
        var activeSection = sections.filter('.active');
        return {
            activeSection: activeSection,
            nextSection: activeSection.next(),
            prevSection: activeSection.prev()
        }
    }

    $('.wrapper').on('wheel', function (e) {

        var deltaY = e.originalEvent.deltaY;
        var section = defineSections(sections);


        if (deltaY > 0 && section.nextSection.length) {
            console.log('вверх');
            performTransition(section.nextSection.index());
        }

        if (deltaY < 0 && section.prevSection.length) {
            console.log('вниз');
            performTransition(section.prevSection.index());
        }

    })

    $(document).on('keydown', function (e) {
        var section = defineSections(sections);
    
        switch (e.keyCode) {
            case 40: // up
                if (section.nextSection.length) {
                    performTransition(section.nextSection.index());
                }
                break;
            case 38: // down
                if (section.prevSection.length) {
                    performTransition(section.prevSection.index());
                }
                break;
        }
    });

    $('[data-scroll-to]').on('click touchstart', function (e) {
        e.preventDefault();
    
        var elem = $(e.target);
        var sectionNum = parseInt(elem.attr('data-scroll-to'));
        performTransition(sectionNum);
    });
    

});