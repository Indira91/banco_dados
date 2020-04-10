var axios = require('axios')
var user = require('readline-sync')

var municipio = user.question("Escreva o nome da cidade: ")
//var data = user.questionInt("Digite o ano e o mes entre 2018 e 2019: ")


axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${municipio}`)
    .then(function (resposta){
        
        console.log(`CODIGO MUNICIPIO: ${resposta.data.id}`);
})
.catch(function (erro) {
    console.log("Municipio não existe, tente novamente")
})

