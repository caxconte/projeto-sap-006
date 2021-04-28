alert('Boas vindas!');

// Descobrir o nome 
const nome = prompt('Qual seu nome?');
    document.getElementById("retorno").innerHTML = 'Bem vindo, ' + nome + ' !';


// Incluir função IF 
const inicio = prompt('Coloque o numero correspondente a sua resposta. \n Quer iniciar o teste?  \n 1. Sim \n 2. Não');

    function perguntas() {
        if (inicio == 1) {
            const perguntaUm = prompt('1. Quanto é 5x5? \n 1. 40  \n 2. 12 \n 3. 25');
                if (perguntaUm == '3') {
                    // return true;
                    document.getElementById("TRUE1").innerHTML = "Resposta correta 1";
                    } else {
                    document.getElementById("FALSE1").innerHTML = "Resposta Incorreta 1";
                    console.log('bugou');
                    
                }

            const perguntaDois = prompt('2. Quanto é 8+2? \n 1. 12 \n 2. 10 \n 3. 28');
                if (perguntaDois == '2') {
                    // return true;
                    document.getElementById("TRUE2").innerHTML = "Resposta correta 2";
                    } else {
                    // return false;
                    document.getElementById("FALSE2").innerHTML = "Resposta Incorreta 2";
                    console.log('bugou');
                }

            const perguntaTres = prompt('3. Quanto é 24*2? \n 1. 48 \n 2. 43 \n 3. 88');
                if (perguntaTres == '1') {
                // return true;
                document.getElementById("TRUE3").innerHTML = "Resposta correta 3";
                    } else {
                    // return false;
                    document.getElementById("FALSE3").innerHTML = "Resposta Incorreta 3";
                    console.log('bugou');
            }


        } else {
            alert('Obrigada! Até mais!')
        }         
    }


    perguntas();

    // prompt('1. pergunta um \n 1:X \n 2:Y \n 3:z');
    // prompt('2.pergunta dois \n 1:X \n 2:Y \n 3:z');
    // prompt('3.pergunta tres \n 1:X \n 2:Y \n 3:z');

// document.getElementById('titulo').innerHTML = 'Bem-vindo, ' + nome +' !';