function verificarIdade() {
    var anoNascimento = document.getElementById('anoNascimento').value;
    var anoAtual = new Date().getFullYear();
    var idade = anoAtual - anoNascimento;
    var faixaEtaria;

    if (idade >= 0 && idade <= 5) {
        faixaEtaria = 'bebe';
    } else if (idade >= 6 && idade <= 12) {
        faixaEtaria = 'criança';
    } else if (idade >= 13 && idade <= 17) {
        faixaEtaria = 'adolescente';
    } else if (idade >= 18 && idade <= 34) {
        faixaEtaria = 'jovem';
    } else if (idade >= 35 && idade <= 59) {
        faixaEtaria = 'adulto';
    } else if (idade >= 60 && idade <= 130) {
        faixaEtaria = 'idoso';
    } else {
        faixaEtaria = 'idade inválida';
    }

    document.getElementById('resultado').innerHTML = 'Idade: ' + idade + ', Faixa Etária: ' + faixaEtaria;
}