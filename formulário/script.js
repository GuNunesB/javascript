/**
 * Validadores para cadastro de um cliente
 * @author Gustavo Nunes Bispo
 */

// Validação de e-mail
function validarEmail() {
    let email = document.getElementById('inputEmail4').value;
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailInput = document.getElementById('inputEmail4');

    if (!regexEmail.test(email)) {
        alert('E-mail inválido! Insira um e-mail válido.');
        emailInput.focus();
        return false;
    }
    return true;
}

// Validação de CPF
function validarCPF() {
    let cpf = document.getElementById('inputAddress').value.replace(/\D/g, ''); // Remove pontos e traços
    let cpfInput = document.getElementById('inputAddress');

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        alert('CPF inválido! Insira um CPF válido.');
        cpfInput.focus();
        return false;
    }

    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i - 1]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) {
        alert('CPF inválido!');
        cpfInput.focus();
        return false;
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i - 1]) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[10])) {
        alert('CPF inválido!');
        cpfInput.focus();
        return false;
    }

    return true;
}

// Validação de CEP
function buscarEndereco() {
    let cep = document.getElementById('cep').value.replace(/\D/g, ''); // Remove caracteres não numéricos
    let cepInput = document.getElementById('cep');

    if (cep.length !== 8) {
        alert('CEP inválido! Insira um CEP válido com 8 dígitos.');
        cepInput.focus();
        return;
    }

    let urlAPI = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(urlAPI)
        .then(response => response.json())
        .then(dados => {
            if (dados.erro) {
                alert('CEP não encontrado!');
                return;
            }
            document.getElementById('logradouro').value = dados.logradouro || '';
            document.getElementById('bairro').value = dados.bairro || '';
            document.getElementById('cidade').value = dados.localidade || '';
            document.getElementById('uf').value = dados.uf || '';
        })
        .catch(error => console.error('Erro ao buscar o endereço:', error));
}

// Adiciona validações no envio do formulário
document.querySelector('form').addEventListener('submit', function (event) {
    if (!validarEmail() || !validarCPF()) {
        event.preventDefault(); // Impede o envio se algum campo for inválido
    }
});
