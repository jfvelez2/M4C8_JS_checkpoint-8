const miLista = ["velma", "exploradora", "jane", "john", "harry"];

// Usamos un bucle for para imprimir cada nombre:
for (let i = 0; i < miLista.length; i++) {
    console.log(miLista[i]); 
}

// Usamos un bucle while para imprimir cada nombre:
let contador = 0;

while (contador < miLista.length) {
    console.log(miLista[contador]);
    contador++;
}

// Uso de la función de flecha:
const saludar = () => "Hola mundo";

console.log(saludar());