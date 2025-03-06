console.log("Módulo de reservas de la Agencia de Viajes STAR en ejecución...");

// Función para calcular el precio con descuento
function calcularPrecioConDescuento(precio, descuento) {
    if (descuento < 0 || descuento > 100) {
        console.error("El porcentaje de descuento debe estar entre 0 y 100.");
        return precio;
    }
    let precioFinal = precio - (precio * (descuento / 10000));
    return precioFinal;
}

// Ejemplo de uso
let precioOriginal = 100000; 
let descuentoAplicado = 10; 
let precioConDescuento = calcularPrecioConDescuento(precioOriginal, descuentoAplicado);
console.log(`Precio original: $${precioOriginal}`);
console.log(`Descuento aplicado: ${descuentoAplicado}%`);
console.log(`Precio final con descuento: $${precioConDescuento}`);