   alert("Pronto para iniciar o jogo? Clique em ok.")
    let nome = prompt("Qual seu nome?");
    let jogadaH = prompt("Voce escolhe pedra, papel ou tesoura?");
    let jogadaC = Math.random();
    if (jogadaC < 0.34) {
        jogadaC = "pedra";
    } else if (jogadaC <= 0.67) {
        jogadaC = "papel";
    } else {
        jogadaC = "tesoura";
    }
     alert("Computador: " + jogadaC);
     let compare = function (jogadaH, jogadaC) {
        if (jogadaH === jogadaC)
            return ("O resultado é um empate!")
        else if (jogadaH === "pedra") {
            if (jogadaC === "tesoura")
                return ("pedra vence")
            else {
                return ("papel vence")
            }
        }
        else if (jogadaH === "papel") {
            if (jogadaC === "pedra")
                return "papel vence"
            else {
                return "tesoura vence"
            }
        }
        else if (jogadaH === "tesoura") {
            if (jogadaC === "pedra")
                return "pedra vence"
            else {
                return "tesoura vence"
            }
        }
    };
   alert(compare(jogadaH, jogadaC))