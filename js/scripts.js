$(document).ready(function(){

$("#design").hide();
$("#design1").show();

$("#design1").click(function(){
    $("#design").show();
    $("#design1").hide();
});

$("#design").click(function(){
    $("#design1").show();
    $("#design").hide();
});

$("#development").hide();
$("#development1").show();

$("#development1").click(function(){
    $("#development").show();
    $("#development1").hide();
});

$("#development").click(function(){
    $("#development1").show();
    $("#development").hide();
});

$("#prod").hide();
$("#prod1").show();

$("#prod1").click(function(){
    $("#prod").show();
    $("#prod1").hide();
});

$("#prod").click(function(){
    $("#prod1").show();
    $("#prod").hide();
});



});