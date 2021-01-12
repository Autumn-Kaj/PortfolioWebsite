/*Gallery*/
$(document).ready(function(){
    window.scroll({top: 100, duration: 4000, behavior: 'smooth'});
    $("#one").mouseover(function(){
        $("#one").css({"height": "85.5vh"});
    });
    $("#one").mouseout(function(){
        $("#one").css({"height": "85vh"});
    });
    $("#two").mouseover(function(){
        $("#two").css({"height": "85.5vh"});
    });
    $("#tw0").mouseout(function(){
        $("#two").css({"height": "85vh"});
    });
    $("#three").mouseover(function(){
        $("#three").css({"height": "85.5vh"});
    });
    $("#three").mouseout(function(){
        $("#three").css({"height": "85vh"});
    });
    $("#four").mouseover(function(){
        $("#four").css({"height": "85.5vh"});
    });
    $("#four").mouseout(function(){
        $("#four").css({"height": "85vh"});
    });
    ScrollReveal().reveal('#one', {duration: 1000, delay:500, distance: '100px', origin: 'bottom', });
    ScrollReveal().reveal('#two', {duration: 1000, delay:1000, distance: '100px', origin: 'bottom', });
    ScrollReveal().reveal('#three', {duration: 1000, delay:1500, distance: '100px', origin: 'bottom', });
    ScrollReveal().reveal('#four', {duration: 1000, delay:2000, distance: '100px', origin: 'bottom', });
});
