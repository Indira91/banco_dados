//Use o spread operator para trasnformar o array ['a', 'b', 'c'}] em ['a', 'b', 'c', 'a', 'b', 'c']

var array = ['a', 'b', 'c'];
var arraynova = ['a', 'b', 'c', ...array];

console.log(arraynova);
