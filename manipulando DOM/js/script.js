// 1. Mudondo valores com value

function mudarTexto(){
    document.getElementsById('texto1').value = "OI";
}

// 2. Mudondo valores com value

function mudarTexto2(){
    document.getElementsById('texto2').innerText = "TCHAU"
    console.log("TCHAU");
}

// 3. Mudando valores com innerText

function mudarTexto3(){
    document.getElementsById('texto3').innerHtml = 
    console.log("TCHAU");
}

// 4. Mudando valores com imagem ao clicar

function mudarImagem(){
    document.getElementsById('img1').src = "img/l.jpg";
}
// 5. Mudando valores com imagem ao clicar

function mudarImagem2(){
    document.getElementsById('img2').src = "img/gato.png";
}
function voltarImagem2(){
    document.getElementsById('img2').src = "img/gato.png";
}

// 6. Mudando cor do texto
function mudarCorTexto(){
    const texto = document.getElementById("texto6");
    texto.innerHtml = "ok";
    texto.style.color= "red"; 
    texto.style.background= "yellow";
}

// 7. Mudando o CSS (com parâmetro)

function mudarTexto7(elemento){
    elemento.innerHtml = "Texto alterado pelo JavaScript"
}

// 8. chamando uma function que chama outra
function calcular(valor1, valor2){
    valor1 = parseFloat(valor1.value);
    valor2 = parseFloat(valor2.value);

    const resultado = somar(valor1, valor2);

    mostrarResultado(resultado);
}

function somar(valor1, valor2){
    return valor1 + valor2;
}

function mostrarResultado(resultado){
    document.getElementById('resultado').innerHTML = resultado;
}

// 9. Segurar e soltar
function segurar(elemento){
    elemento.innerHTML = "solte";
    elemento.style.backgroundColor = "#252977"
}

function soltar(elemento){
    elemento.innerHTML = "clicar"
    elemento.style.backgroundColor = "#777777"
}
 