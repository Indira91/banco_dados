

//a) Declare uma variavel dentro de uma função e tente acessar a mesma fora da função

        function variavelEmUmaFuncao() {
            var idade = "nao me lembro";
            var endereco = "rua dos ingleses"
        }
            console.log(idade)  //nao funciona=== ReferenceError: idade is not defined

//b)Declare uma variavel dentro de um bloco e tente acessar a mesma fora do bloco

        var numero1 = 25
        var numero2 = 50

        if (numero2==50){
            var cor ="branco"

            console.log("ola")
        }
        console.log(cor) // => nao funciona em outro bloco, porem sim fora do bloco? 
        

//c)Declare duas vezes a mesma variavel no mesmo escopo

        function duasVezesNoEscopo(){
            var nome = "marcos"
            var nome = "fernando"

            console.log(nome, nome)
        }
            duasVezesNoEscopo() //imprime a ultima variavel declarada com o mesmo nome

//d)Declare uma variavel fora de uma função, declare a mesma variavel dentro de uma função
//  e depois imprima seu valor depois do bloco

        var capitais ="lisboa"

        function declareUmaVariavel() {
            var capitais="santiago de chile"
            
            console.log(capitais)
        }
            declareUmaVariavel() //executa a função com a variavel dentro da mesma

            console.log(capitais) //imprime a variavel com o mesmo nome fora da função

//e)Declare uma variavel fora de um bloco, declare a mesma variavel dentro de um bloco e
//  imprima seu valor depois do bloco

        var total = 1550

        if(total>1500){
            var total = 1600
            
        }

        console.log(total) //assume o ultimo valor dado para a mesma variavel???

//Declare uma variavel e mude o valor dela depois

        var pais = "argentina"
        var passagem = 1250

        if (passagem<1300){
            console.log("bora viajar")
            var pais = "chile"
            var pais = "equador"
        }

        console.log(pais) //porque???


