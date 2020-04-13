var user = require("readline-sync")
var axios= require("axios")
var dados;
var poke = user.question("Escreva o nome do pokemon ou digite o ID para consulta: ").toLowerCase()

function osPokemons( ){
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
} 
    dados=osPokemons();
    dados.then(function(resposta){
        var nome = resposta.data.name
        var tipo = resposta.data.types
        var habilidades = resposta.data.abilities
            console.log("pokemon: " + nome.toUpperCase())
            tipo.map(pokemon =>{console.log(`Tem o tipo: ${pokemon.type.name}`)})
            habilidades.map(pokemon=>{console.log(`Possui habilidade: ${pokemon.ability.name}`) })
       
          var salvar = user.questionInt("Digite 1 para salvar pokemon ou qualquer numero para sair: ")    
        
        if (salvar == 1){
         
          var file = require('file-system');
          var pokemon = new Object()
          pokemon.nome = nome
          pokemon.tipo = tipo
          pokemon.habilidades = habilidades

          var pokemonSerializado = JSON.stringify(pokemon)
          var caminhoDoArquivo = 'pokemon.json'
          file.writeFileSync(caminhoDoArquivo, pokemonSerializado);
          console.log(pokemonSerializado + '\nSeu POKEMON foi salvo com sucesso.' )

        }else {
            console.log("Ate a proxima.")
        }
         
}) 
          .catch(function (erro) {
          console.log("Esse pokemon não existe, tente novamente.")  
               
})
    
    
         


        


//axios.get(`https://pokeapi.co/api/v2/type`)
    //.then(resposta=> {
        //console.log(resposta.data.results)
//})

//axios.get(`https://pokeapi.co/api/v2/ability/`)
   // .then(resposta=> {
       // console.log(resposta.data)
//})
