function cambia(){
    $("header").hide();
}
function apagaPrimero(){
    $(".primero").slideUp();

}

$("#btn-primero").dblclick(function(){
    $(".primero").slideDown();
});

function apagaSegundo(){
    $("#segundo").hide();
}
function cambiaBackH1(){
    $(".primero").css({"background-color": "red"});
}

$("#btn-show").click(function(){
    $("#segundo").show();
});
$("#btn-show").mouseenter(function(){
    $("#sbtn-show").animate({width: "300px"});
});