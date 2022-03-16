function media() {
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
    const valor3 = document.getElementById('valor3').value;
    const resultado1 = (parseInt(valor1) + parseInt(valor2) + parseInt(valor3)) / 3;
    document.getElementById('resultado1').value = resultado1;
}

// exer 3

function calcularDesconto() {
    const valorProduto = document.getElementById('valorProduto').value;
    const desconto = 10;
    const novoValor = valorProduto - valorProduto / 100 * desconto;

    document.getElementById('resultado3') = novoValor;
}

// exer 4
// function inverterValor() {
//     const valorA = document.getElementById('valorA').value;
//     const valorB = document.getElementById('valorB').value;
//     const valorC = valorA;
//     document.getElementById('valorC');
// }

