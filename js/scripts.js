$(document).ready(function(){

$("#design1").click(function(){
    $("#design").show();
    $("#design1").hide();
});

$("#design").click(function(){
    $("#design1").show();
    $("#design").hide();
});

$("#development1").click(function(){
    $("#development").show();
    $("#development1").hide();
});

$("#development").click(function(){
    $("#development1").show();
    $("#development").hide();
});

$("#prod1").click(function(){
    $("#prod").show();
    $("#prod1").hide();
});

$("#prod").click(function(){
    $("#prod1").show();
    $("#prod").hide();
});

$(".port1").hover(function(){
    $(this).children("#port1A").fadeToggle(1000, 'linear');
});

$("#mc-embedded-subscribe").click(function(){
    alert("Thank for Subscribing to our email list. Your message has been received")
});

});