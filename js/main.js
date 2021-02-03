/*JQuery*/
$(document).ready(function(){
    $('#scroll-button').click(function(){
        window.scroll({top: 1000, duration: 4000, behavior: 'smooth'});
    });
});
/*Main Page*/
ScrollReveal().reveal('#scroll-button', { duration: 3000, distance: '40px', origin: 'top', });
ScrollReveal().reveal('.gallery-grid', { duration: 2000, distance: '200px', origin: 'left'});
ScrollReveal().reveal('.about-grid', { duration: 2000, delay:500,distance: '200px', origin: 'right'});

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
ScrollReveal().reveal('.left-contact', {duration: 2000,distance:'500px', origin:'left'})
ScrollReveal().reveal('.right-contact', {duration: 2000,distance:'500px', origin:'right'})

/*123 Page*/
ScrollReveal().reveal('#what-if-fade', {duration: 4000})
ScrollReveal().reveal('#table-one', {duration: 2000, distance:'500px', origin:'right'})
ScrollReveal().reveal('#table-two', {duration: 2000, delay:500,distance:'500px', origin:'right'})
ScrollReveal().reveal('#table-three', {duration: 2000, delay:1000,distance:'500px', origin:'right'})

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

/*Slate*/
$(document).ready(function(){
    $('#square1').mouseenter(function(){
        $('#square1').attr("src", "images/ProductFeatures/slate/lightboard1.png")
    });
    $('#square1').mouseleave(function(){
        $('#square1').attr("src", "images/ProductFeatures/slate/lightboard.png")
    });

    $('#square2').mouseenter(function(){
        $('#square2').attr("src", "images/ProductFeatures/slate/TabletSquare1.png")
    });
    $('#square2').mouseleave(function(){
        $('#square2').attr("src", "images/ProductFeatures/slate/TabletSquare.png")
    });

    $('#square3').mouseenter(function(){
        $('#square3').attr("src", "images/ProductFeatures/slate/PenSquare1.png")
    });
    $('#square3').mouseleave(function(){
        $('#square3').attr("src", "images/ProductFeatures/slate/PenSquare.png")
    });
});