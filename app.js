alert('Boas vindas ao jogo do número secreto!');

let limite = prompt(`Qual o limite de números pra adivinhar?`);
let numeroSecreto = parseInt(Math.random() * limite) +1;
let tentativas = 1;
let chute = prompt(`Escolha um número entre 1 e ${limite}`);

while (chute != numeroSecreto){
    
    if (chute == numeroSecreto){
        break;        
    } else {
        if (numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        chute = prompt(`Escolha um número entre 1 e ${limite}`);
    }
    tentativas++;
}

palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou! O número secreto é ${numeroSecreto}, você acertou com ${tentativas} ${palavraTentativa}`);

