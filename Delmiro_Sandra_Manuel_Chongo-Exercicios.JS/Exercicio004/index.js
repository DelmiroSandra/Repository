function validarFormulario() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var emailcerto = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name === '') {
        document.getElementById('nameError').innerHTML = 'Por favor, preencha o campo nome.';
    } else {
        document.getElementById('nameError').innerHTML = '';
    }

    if (email === '' || !emailcerto.test(email)) {
        document.getElementById('emailError').innerHTML = 'Por favor, insira um email válido.';
    } else {
        document.getElementById('emailError').innerHTML = '';
    }
}