/*
Jogo de Adivinha

O usuário tenta adivinhar um número aleatório entre e e 10.

Criado por: Rafael Brito
61 9 8533-0333

Contato: rafael.brito88@gmail.com 

*/
let chute = 0;
let tentativas = 3;

// Sortear o número e deixa-lo constante. 

const numeroSecreto = Math.floor(Math.random() * 15) + 1; 

while ((chute !== numeroSecreto) && 
	tentativas > 0) {
    chute = Number(prompt("Advinhe o número de 1 a 15. Você tem " +tentativas+ " tentativa(s). "));
    tentativas --;
}
    
if (chute > numeroSecreto) {
   
    alert("Numero inserido é maior que a resposta");
}
if (chute < numeroSecreto) {
    alert("Numero inserido é menor que a resposta");
  }

if (chute === numeroSecreto) {
	alert ("parabens");
}
else {
    alert("Numero inserido é menor que a resposta");
}



// math.random()
// 0.000001
// 0.999999


// math.random()*10
// 0.00001
// 9.99999

// math.floor( math.random()*10 )
// 0
// 9

// math.floor( math.random()*10 ) + 1
// 1
// 10