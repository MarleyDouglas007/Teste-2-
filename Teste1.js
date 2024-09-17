const readline = require('readline');

// Configura o readline para receber a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para verificar se um número está na sequência de Fibonacci
function isFibonacci(num) {
    let a = 0;
    let b = 1;

    if (num === a || num === b) return true;

    let c = a + b;

    while (c <= num) {
        if (c === num) return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}

// Recebe a entrada do usuário
rl.question('Digite um número para verificar se está na sequência de Fibonacci: ', (input) => {
    const inputNumber = parseInt(input);
    const result = isFibonacci(inputNumber);
    console.log(result ? `${inputNumber} pertence à sequência de Fibonacci.` : `${inputNumber} não pertence à sequência de Fibonacci.`);
    rl.close();
});


//Você pode testar usando(node Teste1.js) no terminal 