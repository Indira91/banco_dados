var axios = require("axios")
var sqlite = require("sqlite3")

var db = new sqlite.Database('./corona.db', erro => {
    if (erro) {
      console.log('Erro ao conectar com o banco de dados');
    }
  })

  //axios.get("https://api.covid19api.com/summary")
   //.then(retorno => {

   //     var paises = 
   // })