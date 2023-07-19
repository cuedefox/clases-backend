let numeros = {};
for (let i = 0; i < 10000; i++) {
    numero = Math.floor(Math.random() * 20 + 1);
    numeros[numero] ? numeros[numero]++ : numeros[numero] = 1;
}
console.log(numeros);