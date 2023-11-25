function cambia() {
    $("header").hide();
}
function apagaPrimero() {
    $(".primero").slideUp();

}

$("#btn-primero").dblclick(function () {
    $(".primero").slideDown();
});

function apagaSegundo() {
    $("#segundo").hide();
}
function cambiaBackH1() {
    $(".primero").css({ "background-color": "red" });
}

$("#btn-show").click(function () {
    $("#segundo").show();
});
$("#btn-show").mouseenter(function () {
    $("#sbtn-show").animate({ width: "300px" });
});

// var a = $('<p>');

// a.click(function () {
//     this.attr('class', 'destaque');
// });

// $('li["#item0"]').attr('class', 'selecionado');

function Retangulo(w, h) {
    var a = w;
    var b = h;

    this.getLargura = function () {
        return a;
    }
    this.getAltura = function () {
        return b;
    }
    this.area = function () {
        return a * b;
    }
    this.ehQuadrado = function () {
        return a === b;
    }
}

var r = new Retangulo(10, 10);
if (r.ehQuadrado()) {
    console.log("O quadrado de lado " + r.getLargura() + " tem área igual a " + r.area());
} else {
    console.log("O retângulo de largura " + r.getLargura() + " e altura " + r.getAltura() + " tem área igual a " + r.area());
}
console.log(r.ehQuadrado());

function algumaFuncao() {
    try {
        var x = prompt("Digite um número")
        if (x == "") throw "vazio";
        if (isNaN(x)) throw "não é número";
        if (x > 10) throw "muito alto";
        if (x < 5) throw "muito baixo";
        const ul = $('#lista')[0];
        $('#lista').children().remove();
        const li = $("<li>" + x + "</li>");
        ul.appendChild(li[0]);
    } catch (err) {
        console.log("Erro: " + err + ".");
    }
}
