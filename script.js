// Alterar cor da pagina
function dark(){
    document.getElementById('stylesheet').href='Estilo/dark.css';
}

function light(){
    document.getElementById('stylesheet').href='Estilo/light.css';
}


// Funçao para Multiplicar as Receitas
function dobraReceita(){
    var mult = document.getElementById("num").value;
    var ovos = 3 * mult;
    var acucar = 2 * mult;
    var fuba = 3 * mult;
    var trigo = 3 * mult;
    var oleo = 1/2 * mult;
    var leite = 1 * mult;
    var fermento = 1 * mult;
    document.getElementById("paragReceita").innerHTML = "<ul><li> " + ovos + " ovos inteiros </li><li> " + acucar + " xícaras (chá) de açúcar</li><li> " 
    + fuba + " xícaras (chá) de fubá</li><li> " + trigo + " colheres (sopa) de farinha de trigo</li><li> " 
    + oleo + " copo (americano) de óleo</li><li> " + leite + " copo (americano) de leite</li><li> " + fermento + " colher (sopa) de fermento em pó</li>";
}

// Funçao para se eu posso aposentar
function aposentar(){
    var idade = document.getElementById("idade").value;
    var contribuicao = document.getElementById("contribuicao").value;
    var mulher = document.getElementById("M").checked;
    var homem = document.getElementById("H").checked;
    
    if(mulher == true){
        if (idade >= 57 && contribuicao >= 30) {
            document.getElementById("apos").innerHTML = "Pode aposentar";
        } else {
            document.getElementById("apos").innerHTML = "Não pode aposentar";
        }
    } else if(homem == true){
        if (idade >= 60 && contribuicao >= 35) {
            document.getElementById("apos").innerHTML = "Pode aposentar";
        } else {
            document.getElementById("apos").innerHTML = "Não pode aposentar";
        }
    } else {
        document.getElementById("apos").innerHTML = "Selecione um Genero";
    }
}

// Funçao para se eu passei de ano
function passei(){
    var primeiro = document.getElementById("prim").value;
    var segundo = document.getElementById("seg").value;
    var terceiro = document.getElementById("ter").value;
    var quarto = document.getElementById("qua").value;
    var frequencia = document.getElementById("fre").value;

    if (primeiro > 10 || primeiro < 0){
        document.getElementById("passe").innerHTML = "Insira Notas Validas";
    } else if (segundo > 10 || segundo < 0){
        document.getElementById("passe").innerHTML = "Insira Notas Validas";
    } else if (terceiro > 10 || terceiro < 0){
        document.getElementById("passe").innerHTML = "Insira Notas Validas";
    } else if (quarto > 10 || quarto < 0){
        document.getElementById("passe").innerHTML = "Insira Notas Validas";
    } else if (frequencia > 100 || frequencia < 0){
        document.getElementById("passe").innerHTML = "Insira  Frequencia Valida";
    } else {
        var media = (primeiro + segundo + terceiro + quarto)/4;

        if(media >= 6 && frequencia >= 75){
            document.getElementById("passe").innerHTML = "Passou de ano!";
        } else if(media < 6 && frequencia >= 75){
            document.getElementById("passe").innerHTML = "Reprovou por Nota!";
        } else if(frequencia < 75){
            document.getElementById("passe").innerHTML = "Reprovou por Frequencia!";
        } else if(media > 10 && frequencia >= 75){
            document.getElementById("passe").innerHTML = "Conselho";
        } else {
            document.getElementById("apos").innerHTML = "Insira as notas";
        }
    }
}

// Funçao para calcular um juros composto
function juros(){
    var capital = document.getElementById("cap").value;
    var taxa = document.getElementById("taxa").value;
    var tempo = document.getElementById("tempo").value;

    var tempoAno = tempo/12;
    var texaFinal = 1 + (taxa/100);
    // M = C (1 + i)t 
    var montante = capital * (Math.pow(texaFinal,tempoAno));
    // J = M – C
    var rendimento = montante - capital;

    var montanteFinal = montante.toFixed(2);
    var rendimentoFinal = rendimento.toFixed(2);
    
    document.getElementById("juros").innerHTML = "Montante: " + montanteFinal + "<br>Rendimento: " + rendimentoFinal;
}

