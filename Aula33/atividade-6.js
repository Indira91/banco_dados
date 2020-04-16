//Crie uma função que concatene dois arrays usando o método push e spread operator

function dasPreferencias() {
    
const animais = [' gato', ' coelho' ];
const animal = animais.push('cachorro');
 //console.log(animales);

var frutas = [' mamao', ' morango', ' maca', ' abacaxi']
var frutas2 = [...frutas, " banana", " laranja"]
//console.log(frutas2);
    console.log(`Ela adorava frutas doces como: ${frutas2}, e tinha um estusiamo por certos animais como:  ${animais} `)

}
dasPreferencias()