# Exercícios

## Funções

Faça os exercícios a seguir escrevendo código JavaScript a ser vinculado à sua página HTML com a tag `<script>`.

- Utilize a função `prompt()` para capturar dados do usuário
- Utilize as funções `prompt()` ou `confirm()` para capturar entradas do usuário
- Utilize as funções `alert()` ou `console.log()` para exibir saídas ao usuário
- Faça a verificação se o tipo de dado adequado foi inserido
- Utilize a conversão de tipos, implícita ou explícita, conforme necessidade, em cada exercício
- Os exercícios a seguir NÃO precisam necessariamente que dados sejam fornecidos pelo usuário
- As funções podem ser testadas e invocadas por vocês mesmos no código a fim de testar os seus resultados
- Você pode utilizar tanto DECLARAÇÃO DE FUNÇÃO quanto EXPRESSÃO DE FUNÇÃO

### Essenciais

1. Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Determine qual o maior entre eles e imprima-o no console.
2. Escreva uma função chamada `concatenar3` que aceita 4 parâmetros, sendo os três primeiros palavras a serem concatenadas, e o quarto o separador que será utilizado entre elas. Retorne as palavras concatenadas, com o separador entre elas. Defina o valor padrão do parâmetro separador como `“ | “`.
3. Escreva uma função que recebe um número de minutos como parâmetro e retorna a representação do mesmo tempo em horas.
4. Você está indo de carro para uma nova cidade para uma pequena viagem de fim de semana. Escreva uma função chamada retornarQuantidadeDeGasolina que receba dois números como parâmetros:
	- o número de quilômetros até o seu destino
	- o consumo médio em litros por 100 km

	A função deve retornar a quantidade de gasolina necessária para completar toda a viagem de ida e volta.

5. Escreva um programa que contenha as seguintes funções aplicáveis a um sistema de loja virtual/financeiro:

	5.1 **Exibir produto com preço** - a função deve receber 2 (dois) parâmetros, o nome de um produto e o preço do produto, ela deve exibir no console o nome do produto seguido do preço com símbolo monetário, aproximadamente assim:
		
	`Jaqueta Jeans …………………………… R$ 220,00`
	
	5.2 **Preço da parcela** - a função deve receber 2 (dois) parâmetros: o preço total do pedido, e a quantidade de parcelas. O número máximo de parcelas deve ser 12. O número padrão de parcelas deve ser 1. A função deve retornar o preço da parcela, caso o segundo parâmetro seja maior que 12, o preço total deve ser retornado.

	5.3 **Aplicar desconto** - a função deve receber 2 (dois) parâmetros: o valor total do pedido, e um segundo parâmetro um desconto. A função deve retornar o preço com o desconto decrescido, caso o desconto seja maior que o valor total do pedido, o valor a ser retornado deve ser 0.

	5.4 **Aplicar cupom de desconto** - a função deve receber 2 (dois) parâmetros: o valor total do pedido, e um segundo uma string. A função deve verificar se a string passada é: `CUPOM50`, `CUPOM100` ou `CUPOM200`. Caso seja `CUPOM50`, deve ser invocada a função de aplicação do desconto passando como parâmetro de desconto o valor 50. O resultado retornado da função de aplicação de desconto deve ser retornado. Caso seja `CUPOM100`, deve ser invocada a função de aplicação do desconto passando como parâmetro de desconto o valor 100. O resultado retornado da função de aplicação de desconto deve ser retornado. Caso seja `CUPOM200`, deve ser invocada a função de aplicação do desconto passando como parâmetro de desconto o valor 200. O resultado retornado da função de aplicação de desconto deve ser retornado. Caso não seja nenhum dos 3 (três), a função deve retornar o valor total.
// ==========================================
// EXERCÍCIO 1: Maior de três números
// ==========================================
function encontrarMaiorNumero(num1, num2, num3) {
    // Validação dos dados de entrada
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.error("Erro no Ex 1: Todos os parâmetros devem ser números válidos.");
        return;
    }
    
    // Conversão explícita para garantir o tipo Number
    const n1 = Number(num1);
    const n2 = Number(num2);
    const n3 = Number(num3);

    let maior = n1;

    if (n2 > maior) {
        maior = n2;
    }
    if (n3 > maior) {
        maior = n3;
    }

    console.log(`O maior número entre [${n1}, ${n2}, ${n3}] é: ${maior}`);
}

// ==========================================
// EXERCÍCIO 2: Concatenação com separador
// ==========================================
const concatenar3 = function(palavra1, palavra2, palavra3, separador = " | ") {
    // Conversão implícita/explícita para garantir tratamento como String
    const p1 = String(palavra1);
    const p2 = String(palavra2);
    const p3 = String(palavra3);
    const sep = String(separador);

    return `${p1}${sep}${p2}${sep}${p3}`;
};

// ==========================================
// EXERCÍCIO 3: Minutos para Horas
// ==========================================
function converterMinutosParaHoras(minutos) {
    if (isNaN(minutos) || minutos < 0) {
        return "Erro: Insira uma quantidade de minutos válida.";
    }

    const m = Number(minutos);
    const horas = Math.floor(m / 60);
    const minutosRestantes = m % 60;

    // Formatação de dois dígitos para os minutos
    const minFormatado = minutosRestantes < 10 ? `0${minutosRestantes}` : minutosRestantes;

    return `${horas}:${minFormatado}h`;
}

// ==========================================
// EXERCÍCIO 4: Consumo de Gasolina (Ida e Volta)
// ==========================================
function retornarQuantidadeDeGasolina(distanciaKm, consumoPor100Km) {
    if (isNaN(distanciaKm) || isNaN(consumoPor100Km) || distanciaKm <= 0 || consumoPor100Km <= 0) {
        return "Erro: Parâmetros de distância ou consumo inválidos.";
    }

    const distanciaTotal = Number(distanciaKm) * 2; // Ida e volta
    const consumoMedio = Number(consumoPor100Km);

    // Regra de três: (distanciaTotal * consumoMedio) / 100
    const gasolinaNecessaria = (distanciaTotal * consumoMedio) / 100;

    return gasolinaNecessaria;
}

// ==========================================
// EXERCÍCIO 5: Sistema de Loja Virtual
// ==========================================

// 5.1 Exibir produto com preço
function exibirProdutoComPreco(nome, preco) {
    if (!nome || isNaN(preco)) {
        console.error("Erro no Ex 5.1: Nome ou preço inválido.");
        return;
    }
    const precoFormatado = Number(preco).toFixed(2).replace('.', ',');
    // Uso do padEnd para criar os pontos de espaçamento dinamicamente
    const nomeFormatado = String(nome).padEnd(30, '.');
    
    console.log(`${nomeFormatado} R$ ${precoFormatado}`);
}

// 5.2 Preço da parcela
function calcularPrecoParcela(precoTotal, quantidadeParcelas = 1) {
    if (isNaN(precoTotal) || isNaN(quantidadeParcelas)) {
        return "Erro: Valores numéricos inválidos.";
    }

    const total = Number(precoTotal);
    const parcelas = Number(quantidadeParcelas);

    if (parcelas > 12 || parcelas < 1) {
        return total;
    }

    return total / parcelas;
}

// 5.3 Aplicar desconto
function aplicarDesconto(valorTotal, desconto) {
    if (isNaN(valorTotal) || isNaN(desconto)) {
        return "Erro: Valores numéricos inválidos.";
    }

    const total = Number(valorTotal);
    const desc = Number(desconto);

    if (desc > total) {
        return 0;
    }

    return total - desc;
}

// 5.4 Aplicar cupom de desconto
function aplicarCupomDesconto(valorTotal, cupom) {
    if (isNaN(valorTotal)) {
        return "Erro: Valor total inválido.";
    }

    const total = Number(valorTotal);
    const codigoCupom = String(cupom).toUpperCase().trim();

    switch (codigoCupom) {
        case "CUPOM50":
            return aplicarDesconto(total, 50);
        case "CUPOM100":
            return aplicarDesconto(total, 100);
        case "CUPOM200":
            return aplicarDesconto(total, 200);
        default:
            return total;
    }
}


// ==========================================
// ÁREA DE TESTES AUTOMÁTICOS (Console)
// ==========================================
console.log("--- INICIANDO TESTES DOS EXERCÍCIOS ---");

// Teste 1
encontrarMaiorNumero(10, 25, 15);

// Teste 2
console.log("Ex 2:", concatenar3("JavaScript", "é", "legal"));
console.log("Ex 2 (Separador customizado):", concatenar3("A", "B", "C", " - "));

// Teste 3
console.log("Ex 3 (135 min):", converterMinutosParaHoras(135));

// Teste 4
console.log("Ex 4 (Ida/Volta para 150km a 8L/100km):", retornarQuantidadeDeGasolina(150, 8), "litros");

// Testes 5
exibirProdutoComPreco("Jaqueta Jeans", 220.00);
console.log("Ex 5.2 (Parcela 120 em 4x): R$", calcularPrecoParcela(120, 4));
console.log("Ex 5.2 (Parcelas > 12): R$", calcularPrecoParcela(120, 13));
console.log("Ex 5.3 (Desconto R$30 em R$100): R$", aplicarDesconto(100, 30));
console.log("Ex 5.4 (Cupom CUPOM100 em R$250): R$", aplicarCupomDesconto(250, "CUPOM100"));


// ==========================================
// EXEMPLO DE INTERAÇÃO COM O USUÁRIO (PROMPT)
// ==========================================
// Descomente as linhas abaixo caso queira testar a captura via prompt no navegador:

/*
const querInteragir = confirm("Deseja calcular o seu gasto de gasolina usando o Prompt?");
if (querInteragir) {
    const distancia = prompt("Digite a distância até o destino em Km:");
    const consumo = prompt("Digite o consumo médio do veículo (L por 100 km):");
    
    const resultadoGasolina = retornarQuantidadeDeGasolina(distancia, consumo);
    
    if (typeof resultadoGasolina === "number") {
        alert(`Você precisará de ${resultadoGasolina} litros de gasolina para a viagem de ida e volta.`);
    } else {
        alert(resultadoGasolina); // Exibe mensagem de erro da validação
    }
}
*/
