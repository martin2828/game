let $par = document.querySelector("#par");
let $impar = document.querySelector("#impar");
let $resultado = document.querySelector("#resultado");
let $puntuacion = document.querySelector("#puntuacion");

let puntuacion = 0;
$resultado.innerHTML = `Numero:`;
$puntuacion.innerHTML = `<h4>Puntuacion: ${puntuacion}</h4>`


const generarPar = () => {
    let numero = Math.floor(Math.random() * 100)
    if (numero%2 === 0) {
        $resultado.innerHTML = `Numero: ${numero}`;
        puntuacion++;
        $puntuacion.innerHTML = `<h4>Puntuacion: ${puntuacion}</h4>`
    }else {
        $resultado.innerHTML = `Numero: ${numero}`;
        puntuacion--;
        $puntuacion.innerHTML = `<h4>Puntuacion: ${puntuacion}</h4>`
    }
}

const generarImpar = () => {
    let numero = Math.floor(Math.random() * 100)
    if(numero%2 === 0){
        $resultado.innerHTML = `Numero: ${numero}`;
        puntuacion--;
        $puntuacion.innerHTML = `<h4>Puntuacion: ${puntuacion}</h4>`
    }else {
        $resultado.innerHTML = `Numero: ${numero}`;
        puntuacion++;
        $puntuacion.innerHTML = `<h4>Puntuacion: ${puntuacion}</h4>`
    }
}

$par.addEventListener('click', () => {
    generarPar();
})

$impar.addEventListener('click', () => {
    generarImpar();
})

