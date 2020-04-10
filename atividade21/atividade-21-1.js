var user = require("readline-sync")
var admin = require("firebase-admin");

var serviceAccount = require("./credenciais.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://aula-01-04-2020.firebaseio.com"
});

var cadastrar = user.questionInt("Digite 1 para cadastrar carro: ")
//var mostrar = user.questionInt("Digite 2 para mostrar os carros existentes:")
//var valormaior = user.questionInt("Digite o valor base: ") 
//var valormenor = user.questionInt("Digite o valor teto:")
//var valorexato = user.questionInt("Digite o valor exato de procura: ")
//var sair = user.questionInt("Digite 3 para sair: ")

    if (cadastrar === 1) {
        var nome = user.question("Escreva nome do carro: ")
        var qualvalor = user.questionInt("Digite o valor: ")

        var usuar = 'usuario'
        var carro = 'carros'

        var bancoDados = admin.database().ref('usuar/carros');

            bancoDados.push({
                carro: nome,
                valor: qualvalor
             });
             console.log("Cadastrado com sucesso")
    } else {}
               
