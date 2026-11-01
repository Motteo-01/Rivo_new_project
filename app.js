$(function() {
    let header = $(".header");
    let hero = $(".hero");
    
    let heroH = hero.length ? hero.innerHeight() : 0;
    let isFixed = false; 

    $(window).on("scroll resize", function() {
        if (hero.length) {
            heroH = hero.innerHeight();
        }
        let scrollPos = $(this).scrollTop();

        if (scrollPos > heroH && !isFixed) {
            header.addClass("fixed");
            isFixed = true;
        } else if (scrollPos <= heroH && isFixed) {
            header.removeClass("fixed");
            isFixed = false;
        }
    });

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); 
        let elementId = $(this).data('scroll'); 
        let element = $(elementId);

        if (element.length) {
            let elementOffset = element.offset().top - 80;
            $("html, body").stop().animate({
                scrollTop: elementOffset
            }, 800);
        }
    });

    $(".tab").on("click", function() {
        $(".tab").removeClass("active");
        $(this).addClass("active");
    });

    document.onselectstart = function() { return false; };
    
    document.ondragstart = function() { return false; };
});