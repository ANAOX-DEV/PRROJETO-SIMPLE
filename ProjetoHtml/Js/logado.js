function elemento(){
    var elemento = document.createElement("div");
    elemento.id = "eId";
    elemento.innerHTML ="<h1>nose</h1>";
    document.body.appendChild(elemento);
}

// Exibe uma mensagem em uma seção de saída de depuração especial do documento. 
// Se o documento não contém esta seção, cria uma.
function debug(msg) {
    // Localiza a seção de depuração do documento, examinando os atributos de // identificação HTML
    var log = document.getElementById("debuglog")
    //Se não existe elemento algum com a identificação "debuglog", cria um. 
    if (!log) {
        // Cria um novo elemento <div>
        log = document.createElement("div");
        // Define o atributo de identificação HTML nele
        log.id = "debuglog";
        // Define o conteúdo inicial 
        log.innerHTML = "<h1>Debug Log</h1>";
        // Adiciona-o no final do documento
        document.body.appendChild(log);
    }
    // Agora, coloca a mensagem em seu próprio <pre> e a anexa no log
    // Cria uma marca <pre> 
    var pre = document.createElement("pre");
    // Coloca a msg em um nó de texto 
    var text = document.createTextNode(msg);
    // Adiciona o texto no <pre> 
    pre.appendChild(text);
    // Adiciona <pre> no log
    log.appendChild(pre);
}
// Oculta o elemento e faz script de seu estilo
function hide(e, reflow) {
    // Se o 2o argumento é verdadeiro 
    if (reflow) {
        // oculta o elemento e utiliza seu espaço
        e.style.display = "none"
        // Caso contrário 
    } else {
        // torna e invisível, mas deixa seu espaço
        e.style.visibility = "hidden";
    }
}
debug();