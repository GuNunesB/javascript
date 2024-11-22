/**
 * Fundamentos da POO - Encapsulamento
 * Segurança
 * @author Gustavo Nunes Bispo
 */

console.clear()

class User {
    // Atributos
    constructor(login, senha) {
        this.login = login

        // Encapsular
        let _senha = senha // O "_" "enjaula" a variável
        this.getSenha = () => _senha
        this.setSenha = (novaSenha) => _senha = novaSenha
    }

    // Métodos
    logar() {
        console.log("___________________________")
        console.log(`Usuário: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === "admin" && this.getSenha === 'gugu123') {
            console.log("Usuário autenticado!")
        } else {
            console.log("Usuário e/ou senha inválido(s)!")
        }
    }
}

/* Sistema */

const user1 = new User("admin", "123")
user1.logar()
user1.setSenha("gugu123")
user1.logar()