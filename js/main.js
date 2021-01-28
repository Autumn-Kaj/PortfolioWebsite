/*JQuery*/
$(document).ready(function(){
    $('#scroll-button').click(function(){
        window.scroll({top: 1000, duration: 4000, behavior: 'smooth'});
    });
});
/*Main Page*/
ScrollReveal().reveal('#scroll-button', { duration: 3000, distance: '40px', origin: 'top', });
ScrollReveal().reveal('.gallery-grid', { duration: 2000,});
ScrollReveal().reveal('.about-grid', { duration: 2000, delay:500,});

/*About*/
ScrollReveal().reveal('#slide-in', {duration: 2000, distance:'90px', origin:'right'})
ScrollReveal().reveal('#slide-in2', {duration: 2000, delay:500, distance:'90px', origin:'right'})  
ScrollReveal().reveal('.quickfactcontent', { duration: 2000,});

$(document).ready(function(){
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            $('#overlay').fadeIn("slow");
        }
        else {
            $('#overlay').fadeOut("slow");
        }
        lastScrollTop = st;
    });
});

/*Contact*/
$(document).ready(function(){
    $('#left-hover').mouseenter(function(){
        $('#left-hover').attr("src", "images/Portraits/contact2.png")
    });
    $('#left-hover').mouseleave(function(){
        $('#left-hover').attr("src", "images/Portraits/contact.png")
    });
});

/*123 Page*/
ScrollReveal().reveal('#what-if-fade', {duration: 6000})
$(document).ready(function(){
    $('#table-sketch').mouseenter(function(){
        $('#table-sketch').attr("src", "images/ProductFeatures/123/sketch-overlay.png")
    });
    $('#table-sketch').mouseleave(function(){
        $('#table-sketch').attr("src", "images/ProductFeatures/123/Artboard 9.png")
    });

    $('#table-sketch2').mouseenter(function(){
        $('#table-sketch2').attr("src", "images/ProductFeatures/123/sketch-overlay2.png")
    });
    $('#table-sketch2').mouseleave(function(){
        $('#table-sketch2').attr("src", "images/ProductFeatures/123/fluer1.png")
    });
});
