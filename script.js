function soma(nota1, nota2, nota3) {
    var total = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);
    return total;
}

function calcularMedia(notas) {
    var i = 0, summ = 0, qtdNotas = notas.length;
    while (i < qtdNotas) {
        summ = summ + notas[i++];
    }
    return summ / qtdNotas;
}

function inserirNotas(nome, nota1, nota2, nota3) {

    if (document.getElementById("nomeAluno").value == "") {
        alert("Preencha o nome do aluno!");
        document.getElementById("nomeAluno").focus();
    }
    else if (document.getElementById("notaHTML").value == "") {
        alert("Preencha a nota de HTML!");
        document.getElementById("notaHTML").focus();
    }

    else if (document.getElementById("notaCSS").value == "") {
        alert("Preencha a nota de CSS!");
        document.getElementById("notaCSS").focus();
    }

    else if (document.getElementById("notaJS").value == "") {
        alert("Preencha a nota de javascript!");
        document.getElementById("notaJS").focus();
    }
    else {
        let tabela = document.getElementById("tbNotas");
        let qtdLinhas = tabela.rows.length;
        let linha = tabela.insertRow(qtdLinhas);

        let total = soma(nota1, nota2, nota3);
        var notas = [parseInt(nota1), parseInt(nota2), parseInt(nota3)];
        var media = Math.round(calcularMedia(notas));

        let resultado;

        if (media >= 70)
            resultado = "Aprovado";

        else resultado = "Reprovado";

        linha.insertCell(0).innerHTML = nome;
        linha.insertCell(1).innerHTML = total;
        linha.insertCell(2).innerHTML = media;
        linha.insertCell(3).innerHTML = resultado;

        nomeAluno.value = "";
        notaHTML.value = "";
        notaCSS.value = "";
        notaJS.value = "";
    }
}

function salvarLocalStorage() {
    let conteudo;
    conteudo = window.document.getElementById("tbNotas").innerHTML;
    if (conteudo.length > 0) {
        localStorage.setItem("tabela", conteudo);
        alert("Dados salvos com sucesso!");
    }
}

function recuperarLocalStorage(inicial) {
    let conteudo = localStorage.getItem("tabela");
    if (localStorage.length > 0) {
        document.getElementById('tbNotas').innerHTML = conteudo;
        if (!inicial) alert("Dados recuperados com sucesso!");
    }
    else if (!inicial) {
        alert("Não há dados no LocalStorage!");
    }
}

function limparLocalStorage() {
    if (localStorage.length > 0) {
        localStorage.clear();
        alert("Browser limpo com sucesso!");
    }
    else
        alert("Nada há dados para limpar no LocalStorage!")
}