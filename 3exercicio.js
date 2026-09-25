// --- Atividade 1: Classificação de Temperatura ---
function classificarTemperatura(temperatura) {
    let classificacao = "";
    if (temperatura < 15) {
        classificacao = "Muito frio";
    } else if (temperatura <= 20) {
        classificacao = "Frio";
    } else if (temperatura <= 28) {
        classificacao = "Agradável";
    } else {
        classificacao = "Muito quente";
    }
    console.log(`[Temperatura ${temperatura}°C] -> ${classificacao}`);
}

// --- Atividade 2: Nota e Conceito ---
function avaliarNota(nota) {
    let conceito = "";
    if (nota >= 9) {
        conceito = "Conceito A";
    } else if (nota >= 7) {
        conceito = "Conceito B";
    } else if (nota >= 5) {
        conceito = "Conceito C";
    } else {
        conceito = "Conceito D";
    }
    console.log(`[Nota ${nota}] -> ${conceito}`);
}

// --- Atividade 3: Dia da Semana ---
function obterDiaSemana(dia) {
    let nomeDia = "";
    switch (dia) {
        case 1: nomeDia = "Domingo"; break;
        case 2: nomeDia = "Segunda-feira"; break;
        case 3: nomeDia = "Terça-feira"; break;
        case 4: nomeDia = "Quarta-feira"; break;
        case 5: nomeDia = "Quinta-feira"; break;
        case 6: nomeDia = "Sexta-feira"; break;
        case 7: nomeDia = "Sábado"; break;
        default: nomeDia = "Dia inválido";
    }
    console.log(`[Dia ${dia}] -> ${nomeDia}`);
}

// --- Desafio: Calculadora de IMC ---
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25.0) {
        classificacao = "Peso normal";
    } else if (imc < 30.0) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obeso";
    }
    console.log(`[IMC (Peso: ${peso}kg, Altura: ${altura}m)] -> IMC: ${imc.toFixed(2)} (${classificacao})`);
}

// ==========================================
// EXECUÇÃO DOS TESTES
// ==========================================

console.log("=== ATIVIDADE 1: TEMPERATURA ===");
[10, 18, 25, 32].forEach(classificarTemperatura);

console.log("\n=== ATIVIDADE 2: NOTA E CONCEITO ===");
[9.5, 8.0, 5.5, 3.2].forEach(avaliarNota);

console.log("\n=== ATIVIDADE 3: DIA DA SEMANA ===");
[1, 4, 7, 0, 9].forEach(obterDiaSemana);

console.log("\n=== DESAFIO: CALCULADORA DE IMC ===");
[
    { peso: 50, altura: 1.75 },
    { peso: 68, altura: 1.70 },
    { peso: 82, altura: 1.70 },
    { peso: 95, altura: 1.65 }
].forEach(teste => calcularIMC(teste.peso, teste.altura));