//En nuestros prima la cortesia preguntando el nombre a todos nuestros clientes para darles la bienvenida.
//función de debes colocar un nombre para proseguir, evita dato null.
const buenNombre = () => {
    let nombre = prompt("Buenas día. ¿Cúal es su nombre?")
    if (nombre != null) {
        return nombre;
    } else {
        return buenNombre()
    }
}
let nombre = buenNombre()

let comprar = confirm(`Bienvenido a Fixy Style Bikes estiamd@ ${nombre}.\n¿Deseas realizar una compra?`);

// En el local tenemos disponibles los siguientes colores para nuestros modelos en stock, aqui los declaramos.
const colorrojo = "rojo";
const colorazul = "azul";
const colornegro = "negro";

let total = 0;

// Aquí declaramos la función COMPRA DE BICICLETA, donde se encuentra la seleccion de Marca, Modelo y Cantidad de las mismas.
//Esta función tambíen tiene un parámetro (num1) con la cual le ponemos un orden a las compras que va realizando.

const selecionarModelo = () => {
    const Classic = "a";
    const Jaguar = "b";
    const Bullmoose = "c";
    let marcaLower = prompt("¿Qué modelo de fixie desea? Seleccione el numero \n Selecciona la letra que corresponda: \n A - Classic - $110000 IVA no incluido. \n B - Jaguar - $125000 IVA no incluido. \n C - Bullmoose - $13500 IVA no incluido.");
    let modelofix = marcaLower.toLocaleLowerCase();
    if (modelofix == Classic) {
        return "Classic";
    } else if (modelofix == Jaguar) {
        return "Jaguar";
    } else if (modelofix == Bullmoose) {
        return "Bullmoose";
    } else {
        alert("No contamos con ese modelo");
        return selecionarModelo();
    }
};

// aqui declaramos la funcion de seleccion de COLOR
const selecionarColor = () => {
    let colorLower = prompt(`${marca}\n¿Cuál color deseas?\nColores disponibles: rojo, azul, negro`);
    let color = colorLower.toLocaleLowerCase();
    if ((color === colornegro) || (color === colorazul) || (color === colorrojo)) {
        return color;
    } else {
        alert("Ese color no está disponible");
        return selecionarColor();
    }
};

//Aquí declaramos la función de cuanto pagará por las UNIDADES QUE ESTA COMPRANDO.
const pagaraPorCantidad = () => {
    if (modelofix === "Classic") {
        let pagara = unidad * 110000;
        return pagara;
    } else if (modelofix === "Jaguar") {
        let pagara = unidad * 120000;
        return pagara;
    } else if (modelofix === "Bullmoose") {
        let pagara = unidad * 135000;
        return pagara;
    }
};
//Aqui declaro función de bucles defensivos.
const buclesDefensivos = () => {
    //bucle para evitar return de datos negativos y la compra mínima por cantidad.
    while (unidad < 1) {
        unidad = unidadCorrec();
    }
    //bucle para evitar return de datos NaN
    while ((isNaN(unidad))) {
        unidad = unidadCorrec();
    }
}
//Declaramos una función para la cantidad de unidades que desea el cliente.
function unidadCorrec() {
    let unidad = Number(prompt(`${modelofix} - ${color}\n¿Cuántos unidades necesita?`));
    return unidad;
}
//A partir de aquí llamamos a las funciones declaradas.
//Llamamos a las funciones de selección de modelo y color.
let modelofix = selecionarModelo();
let color = selecionarColor();
//Llamamos a la función de los unidades que desea.
let litros = unidadCorrec()
//Llamamos a la función de bucles defensivos.
buclesDefensivos()
//Llamamos a la función de cuanto pagaráxunidad que pidió.
let pagaraXunidad = pagaraPorunidad();
//Llevamos la cuenta del total sin iva incluido
total = total + pagaraXunidad;

let compraste = `${num1} Modelo: ${modelofix} - Color: ${color} - Unidades: ${unidad} - Subtotal: $${pagaraXunidad}\n\nTotal: $${total} sin IVA incluido`
//Nuestra función retorna un string con todos los datos recolectados.
return compraste;

//Aquí declaramos una función donde tenemos un bucle "for", solo pueden hacer "4" pedidos, estos sirve para que nuestros clietes no nos vacien los depósitos. 
//Tambíen esta función con un bucle "for" le da el parametro a nuestra función "comprarFixie"
function bucleDeCompra() {
    for (let i = 1; ((i <= 4) && (comprar == true)); i++) {
        //Aquí llamamos a nuestra función compraFixie donde "i" es el parámetro.
        let estasComprando = comprarFixie(`${i}:`);
        alert(estasComprando);
        //Este console.log nos va imprimiendo en consola toda la orden de nuestr@ client@
        console.log(estasComprando)
        comprar = confirm("¿Quíeres seguir comprando?");
    };
};

//En Fixy Style Bikes tenemos las funciones del IVA. Solicite su ticket!
const iva = () => {
    let aPagarDeIva = (total * 0.21);
    return aPagarDeIva;
}

const masIva = () => {
    let totalMasIva = (total + iva());
    return totalMasIva;
}

//y todo converge en este "if"
if (comprar == true) {
    bucleDeCompra();
    let apagarIva = iva();
    let totalAPagarMasIva = masIva()
    if (comprar == true) {
        //si el bucle llega a los "4" pedidos salta el alerta de llegaste al limite y finaliza la compra.
        alert(`Subtotal a pagar: $${total}\nIVA a pagar: $${apagarIva}\nTOTAL: $${totalAPagarMasIva}\n\n¡Llegaste al limite de compra ${nombre} para este pedido!\nPara continuar comprando, realice otro pedido\n\nEstimad@ ${nombre}. ¡GRACIAS POR SU COMPRA!`);
    } else {
        //si el/la clint@ pone en cancelar al preguntarle: "¿Quíeres seguir comprando?" tira este alert y finaliza la compra.
        alert(`Subtotal a pagar: $${total}\nIVA a pagar: $${apagarIva}\nTOTAL: $${totalAPagarMasIva}\n\nEstimad@ ${nombre}. ¡GRACIAS POR SU COMPRA!`);
    }
}