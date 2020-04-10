var admin = require("firebase-admin");

var serviceAccount = require("./credenciais.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://indira-arbyte.firebaseio.com"
});

  var primeiroFirebase = "CADASTRAR ATIVIDADE"

  var oBancodeDados = admin.database().ref(primeiroFirebase);

function cadastraAtividade(){
  var Conteudo = user.question("Descreva o Conteudo\n>>")
  var Data = user.question("Digite a data de publicação")
  var Tipo = user.question("Defina o tipo de livro")
  var Titulo = user.question("Escreva o titulo do livro")

  oBancodeDados.push({
      Conteudo: Conteudo,
      Data: "10-2019",
      Tipo: "Biografico",
      Titulo: "Elis e Eu"
  })
  menu()
}

function mostrar(){
  oBancodeDados.on('value', snapshot => {
    console.log(snapshot.val())
    menu()
  })
}