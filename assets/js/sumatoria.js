// Definición de la clase Sumatoria
class Sumatoria {
    constructor(numeroBase) {
        this.base = numeroBase;
        this.acumulado = numeroBase;
        this.siguienteNumero = numeroBase + 1;
        this.pantalla = document.getElementById('pantallaResultados');
        
        // El constructor genera la primera línea de salida
        this.imprimirLinea(`<strong>Constructor iniciado:</strong> La base aleatoria es ${this.base}`);
    }

    sumar() {
        let sumaAnterior = this.acumulado;
        this.acumulado += this.siguienteNumero; 
        
        // El método sumar genera las siguientes líneas en pares (Operación y Resultado)
        this.imprimirLinea(`Operación: ${sumaAnterior} + ${this.siguienteNumero}`);
        this.imprimirLinea(`Resultado actual: ${this.acumulado}`);
        this.imprimirLinea("---"); // Separador visual para mantener orden
        
        this.siguienteNumero++; // Preparamos el valor para el próximo clic
    }

    // Método de apoyo para imprimir en el HTML
    imprimirLinea(texto) {
        this.pantalla.innerHTML += `<p>${texto}</p>`;
        // Hacemos que el scroll baje automáticamente si hay muchos resultados
        this.pantalla.scrollTop = this.pantalla.scrollHeight; 
    }
}

// 1. Generamos el número aleatorio entre 1 y 10
let baseAleatoria = Math.floor(Math.random() * 10) + 1;

// 2. Creamos la instancia (objeto) pasándole la base aleatoria al constructor
const miSumatoria = new Sumatoria(baseAleatoria);

// 3. Conectamos el botón para ejecutar el método sumar()
const btnSumar = document.getElementById('btnSumar');

btnSumar.addEventListener('click', () => {
    miSumatoria.sumar();
});