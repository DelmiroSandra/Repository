function avaliar() {
    var nota = document.getElementById('nota').value;
    if (nota < 10) {
        document.getElementById('nota').style.backgroundColor = 'red';
    } else if (nota < 14) {
        document.getElementById('nota').style.backgroundColor = 'orange';
    } else {
        document.getElementById('nota').style.backgroundColor = 'green';
    }
}