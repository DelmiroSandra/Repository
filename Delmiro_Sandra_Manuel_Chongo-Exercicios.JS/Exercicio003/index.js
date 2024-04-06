function validarFormulario() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '') {
        alert('Coloque o nome de utilizador')
    } 

    if (password === '') {
        alert('Coloque a senha')
    } 
    if (username !== '' && password !== '') {
        alert('Login efectuado com sucesso');
    }
}