function calcular() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);

    let operacao = document.querySelector('input[name="operacao"]:checked').value;

    let resultado;
    if (operacao === "soma") {
        resultado = valor1 + valor2;
    }
    else if (operacao === "subtracao") {
        resultado = valor1 - valor2;
    }
    else if (operacao === "multiplicacao") {
        resultado = valor1 * valor2;
    }
    else if (operacao === "divisao") {
        if (valor2 !== 0) {
            resultado = valor1 / valor2;
        }
        else {
            resultado = "Erro: divisão por zero";
        }
    }
    else {
        resultado = "Valores inválidos"
    }

    document.getElementById("resultado").value = resultado
}