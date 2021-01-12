/*JQuery*/
$(document).ready(function(){
    $('#scroll-button').click(function(){
        window.scroll({top: 1000, duration: 4000, behavior: 'smooth'});
    });
});

ScrollReveal().reveal('#scroll-button', { duration: 3000, distance: '40px', origin: 'top', });
ScrollReveal().reveal('.gallery-grid', { duration: 2000,});
ScrollReveal().reveal('.about-grid', { duration: 2000, delay:500,});

/*Contact*/
ScrollReveal().reveal('#contact-reveal', { duration: 3000, distance: '40px', origin: 'top', });

/*123*/
ScrollReveal().reveal('#tables', {duration: 2000, distance: '100px', origin: 'right', });

