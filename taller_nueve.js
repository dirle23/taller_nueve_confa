// EJERCICIO 1: Números pares entre 1 y 100
let contenedor = document.getElementById("pares");

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    let celda = document.createElement("div");
    celda.className = "numero";
    celda.textContent = i;
    contenedor.appendChild(celda);
    
    console.log("Par: " + i);
  }
}

// EJERCICIO 2: Números impares entre 100 y 1
let contenedorImpares = document.getElementById("impares");

for (let i = 100; i >= 1; i--) {
  if (i % 2 !== 0) {
    let div = document.createElement("div");
    div.className = "numero";
    div.textContent = i;
    contenedorImpares.appendChild(div);
    
    console.log("Impar: " + i);
  }
}

// EJERCICIO 3: Suma de los números del 5 al 50
let suma = 0;

for (let i = 5; i <= 50; i++) {
  suma += i;
}

// Mostrar en la web
document.getElementById("suma").textContent = 
  "La suma de los números del 5 al 50 es: " + suma;

console.log("Suma del 5 al 50: " + suma);
