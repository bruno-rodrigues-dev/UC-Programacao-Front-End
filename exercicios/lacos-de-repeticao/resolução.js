// 1. Números de 1 a 100
let i1 = 1;
while (i1 <= 100) {
    console.log(i1);
    i1++;
}

// 2. Fizz e Buzz (1 a 100)
let i2 = 1;
while (i2 <= 100) {
    if (i2 % 3 === 0) {
        console.log("Fizz");
    } else if (i2 % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i2);
    }
    i2++;
}

// 3. Números de 0 a n
let entradaN = prompt("Digite o número máximo (n):");
let nMax = Number(entradaN);

while (isNaN(nMax) || entradaN === null || entradaN.trim() === "" || nMax < 0) {
    alert("Entrada inválida. Por favor, insira um número maior ou igual a 0.");
    entradaN = prompt("Digite o número máximo (n):");
    nMax = Number(entradaN);
}

let i3 = 0;
while (i3 <= nMax) {
    console.log(i3);
    i3++;
}


// 1. Solicitar 1 ou 0
let valorBinario;
let entradaBinaria;
do {
    entradaBinaria = prompt("Digite 0 ou 1:");
    if (entradaBinaria === null) continue;
    
    if (isNaN(entradaBinaria) || entradaBinaria.trim() === "") {
        alert("Apenas números são aceitos.");
        valorBinario = -1;
    } else {
        valorBinario = Number(entradaBinaria);
    }
} while (valorBinario !== 0 && valorBinario !== 1);

// 2. Solicitar senha cadastrada
const senhaCorreta = "admin123";
let tentativaSenha;
do {
    tentativaSenha = prompt("Digite a sua senha:");
} while (tentativaSenha !== senhaCorreta);

// 3. Maior de 5 números
let contadorMaior = 0;
let maiorNumeroDoWhile;
do {
    let entradaNum = prompt(`Digite o ${contadorMaior + 1}º número de 5:`);
    let numValido = Number(entradaNum);

    if (isNaN(numValido) || entradaNum === null || entradaNum.trim() === "") {
        alert("Número inválido. Tente novamente.");
        continue;
    }

    if (contadorMaior === 0 || numValido > maiorNumeroDoWhile) {
        maiorNumeroDoWhile = numValido;
    }
    contadorMaior++;
} while (contadorMaior < 5);
console.log(`O maior número inserido foi: ${maiorNumeroDoWhile}`);

// 1. Números de 0 a 100
for (let i = 0; i <= 100; i++) {
    console.log(i);
}

// 2. Média aritmética do peso de 10 pessoas
let somaPesos = 0;
for (let i = 1; i <= 100; i++) { 
    let entradaPeso = prompt(`Digite o peso da ${i}ª pessoa (em kg):`);
    let peso = Number(entradaPeso);

    if (isNaN(peso) || entradaPeso === null || entradaPeso.trim() === "" || peso <= 0) {
        alert("Peso inválido. Insira um número positivo.");
        i--; 
        continue;
    }
    somaPesos += peso;
}
console.log(`A média dos pesos é: ${(somaPesos / 10).toFixed(2)} kg`);

// 3. Contagem de números maiores do que 50
let contagemMaiores50 = 0;
for (let i = 1; i <= 100; i++) {
    let entradaContagem = prompt(`Digite o ${i}º número de 10:`);
    let num = Number(entradaContagem);

    if (isNaN(num) || entradaContagem === null || entradaContagem.trim() === "") {
        alert("Número inválido.");
        i--;
        continue;
    }
    if (num > 50) {
        contagemMaiores50++;
    }
}
console.log(`Quantidade de números maiores que 50: ${contagemMaiores50}`);

// 1. Soma de 0 até n
let entradaSomaN = prompt("Digite um número positivo maior que 1:");
let nSoma = Number(entradaSomaN);

while (isNaN(nSoma) || entradaSomaN === null || entradaSomaN.trim() === "" || nSoma <= 1) {
    alert("Entrada inválida. Insira um número maior que 1.");
    entradaSomaN = prompt("Digite um número positivo maior que 1:");
    nSoma = Number(entradaSomaN);
}

let somaAteN = 0;
for (let i = 0; i <= nSoma; i++) {
    somaAteN += i;
}
console.log(`A soma de 0 até ${nSoma} é: ${somaAteN}`);

// 2. Soma contínua até "encerrar"
while (true) {
    let input1 = prompt("Digite o primeiro número para somar (ou digite 'encerrar'):");
    if (input1 !== null && input1.toLowerCase().trim() === "encerrar") break;

    let input2 = prompt("Digite o segundo número para somar (ou digite 'encerrar'):");
    if (input2 !== null && input2.toLowerCase().trim() === "encerrar") break;

    let n1 = Number(input1);
    let n2 = Number(input2);

    if (isNaN(n1) || isNaN(n2) || input1 === "" || input2 === "") {
        alert("Valores inválidos. Por favor, digite números válidos.");
        continue;
    }

    alert(`Resultado da soma: ${n1 + n2}`);
}

// 3. Maior e menor de 5 números
let maiorComp, menorComp;
for (let i = 1; i <= 5; i++) {
    let inputNum = prompt(`Digite o ${i}º número de 5:`);
    let num = Number(inputNum);

    if (isNaN(num) || inputNum === null || inputNum.trim() === "") {
        alert("Número inválido.");
        i--;
        continue;
    }

    if (i === 1) {
        maiorComp = num;
        menorComp = num;
    } else {
        if (num > maiorComp) maiorComp = num;
        if (num < menorComp) menorComp = num;
    }
}
console.log(`Maior número: ${maiorComp} | Menor número: ${menorComp}`);

// 4. Tabuada
let entradaTabuada = prompt("Digite um número para ver a tabuada:");
let numTabuada = Number(entradaTabuada);

while (isNaN(numTabuada) || entradaTabuada === null || entradaTabuada.trim() === "") {
    alert("Por favor, insira um número válido.");
    entradaTabuada = prompt("Digite um número para ver a tabuada:");
    numTabuada = Number(entradaTabuada);
}

for (let i = 1; i <= 10; i++) {
    console.log(`${numTabuada} x ${i} = ${numTabuada * i}`);
}

// 5. Contagem em faixas (20 números)
let faixa1 = 0; // 0-100
let faixa2 = 0; // 101-200
let faixa3 = 0; // >200

for (let i = 1; i <= 20; i++) {
    let inputFaixa = prompt(`Digite o ${i}º número de 20:`);
    let num = Number(inputFaixa);

    if (isNaN(num) || inputFaixa === null || inputFaixa.trim() === "") {
        alert("Número inválido.");
        i--;
        continue;
    }

    if (num >= 0 && num <= 100) {
        faixa1++;
    } else if (num >= 101 && num <= 200) {
        faixa2++;
    } else if (num > 200) {
        faixa3++;
    }
}
console.log(`Entre 0 e 100: ${faixa1}`);
console.log(`Entre 101 e 200: ${faixa2}`);
console.log(`Maiores que 200: ${faixa3}`);

// 6. Soma até digitar número negativo
let somaPositivos = 0;
while (true) {
    let inputSomaNeg = prompt("Digite um número para somar (negativo encerra):");
    let num = Number(inputSomaNeg);

    if (isNaN(num) || inputSomaNeg === null || inputSomaNeg.trim() === "") {
        alert("Número inválido.");
        continue;
    }

    if (num < 0) break;
    somaPositivos += num;
}
console.log(`A soma dos números digitados é: ${somaPositivos}`);

// 7. Senha e contagem de erros
const senhaSecreta = "12345";
let erros = 0;
let inputSenha;

while (true) {
    inputSenha = prompt("Digite a senha secreta:");
    if (inputSenha === senhaSecreta) {
        break;
    }
    erros++;
}
console.log(`Acesso concedido! Tentativas incorretas: ${erros}`);

// 8. Contagem de números pares
let contagemPares = 0;
for (let i = 1; i <= 10; i++) {
    let inputPar = prompt(`Digite o ${i}º número de 10:`);
    let num = Number(inputPar);

    if (isNaN(num) || inputPar === null || inputPar.trim() === "") {
        alert("Número inválido.");
        i--;
        continue;
    }

    if (num % 2 === 0) {
        contagemPares++;
    }
}
console.log(`Total de números pares: ${contagemPares}`);

// 9. Sequência de Fibonacci
let inputFibo = prompt("Digite a quantidade de números de Fibonacci desejada:");
let nFibo = Number(inputFibo);

while (isNaN(nFibo) || inputFibo === null || inputFibo.trim() === "" || nFibo <= 0) {
    alert("Insira uma quantidade inteira positiva.");
    inputFibo = prompt("Digite a quantidade de números de Fibonacci desejada:");
    nFibo = Number(inputFibo);
}

let fib =;
if (nFibo === 1) {
    console.log("0");
} else {
    for (let i = 2; i < nFibo; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib.slice(0, nFibo).join(", "));
}


// ==========================================
// DESENHOS
// ==========================================

// 1. Triângulo
for (let i = 1; i <= 5; i++) {
    let linhaTriangulo = "";
    for (let j = 1; j <= i; j++) {
        linhaTriangulo += "# ";
    }
    console.log(linhaTriangulo.trim());
}

// 2. Calendário
const DIAS_DO_MES = 31;
const DIAS_DA_SEMANA = 7;

console.log(" S  T  Q  Q  S  S  D");

let linhaCalendario = "   "; // Espaço vazio correspondente à segunda-feira inicial não listada
let diaDaSemanaContador = 1; // Terça-feira (segunda coluna)

for (let dia = 1; dia <= DIAS_DO_MES; dia++) {
    let diaString = dia < 10 ? ` ${dia}` : `${dia}`;
    linhaCalendario += diaString + " ";
    diaDaSemanaContador++;

    if (diaDaSemanaContador === DIAS_DA_SEMANA || dia === DIAS_DO_MES) {
        console.log(linhaCalendario);
        linhaCalendario = "";
        diaDaSemanaContador = 0;
    }
}
