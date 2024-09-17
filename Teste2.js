const readline = require('readline');

// Configura a leitura da entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para contar quantas vezes a letra 'a' aparece em uma string
function countLetterA(str) {
    const match = str.match(/a/gi); // Conta todas as ocorrências de 'a' (maiúsculas e minúsculas)
    return match ? match.length : 0; // Retorna o número de ocorrências
}

// Solicita ao usuário uma string para contar a letra 'a'
rl.question('Digite uma string para contar a ocorrência da letra "a": ', (input) => {
    const count = countLetterA(input); // Conta a letra 'a'
    console.log(`A letra 'a' aparece ${count} vez(es) na string.`);
    rl.close(); // Fecha a leitura da entrada
});


//Você pode testar usando(node Teste2.js) no terminal 