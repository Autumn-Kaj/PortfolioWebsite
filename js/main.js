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




/*123*/
ScrollReveal().reveal('#tables', {duration: 2000, distance: '100px', origin: 'right', });

