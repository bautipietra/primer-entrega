function Impuestos() {
    alert(`En este simulador interactivo podras calcular el valor de un producto con impuestos incluidos!`);

let iva = {
    info: "es una carga impositiva al consumo, es decir, es un impuesto que paga el consumidor.",
    tasa: "21%",
    tipo: "indirecto y regresivo"
}

let ialg = {
    info: "El impuesto a las Ganancias en Argentina es un tributo que personas físicas y empresas pagan al Estado cuando sus ingresos declarados anuales superan un monto mínimo no imponible.",
    tasa: "tasa a partir del 25%",
    tipo: "directo y progresivo"
}

let accion = prompt(`Si quieres calcular el valor de un prodcto con impuestos escribe "calcular", si quieres saber mas informacion sobre un impuesto escribe "informacion"`)


if (accion == "informacion") {
    let darinfo = prompt(`Si quieres saber informacion sobre el IVA escribe "iva", si quieres saber informacion sobre el impuesto a las ganancias escribe "ialg"`);
    
    if (darinfo == "iva") {
        alert("Que es: " + iva["info"]);
        alert("Tasa: " + iva["tasa"]);
        alert("Tipo de impuiesto: " + iva["tipo"]);
    }
    else if (darinfo == "ialg") {
        alert("Que es: " + ialg["info"]);
        alert("Tasa: " + ialg["tasa"]);
        alert("Tipo de impuiesto: " + ialg["tipo"]);
    }
    else {
        alert(`La opcion ingresada no es valida`);
    }
}
else if (accion == "calcular") {
    let producto = Number(prompt(`Escribe el valor del producto`));
    let impuesto = prompt(`Escribe el impuesto a sumar escribiendo segun su caso: "iva"  "otro"`);

    if (producto < 1) {
        alert(`el valor del producto no puede ser menor a 1`);
    }
    else if (impuesto == `otro`) {
        let tasa = Number(prompt(`Ingresa la tasa del impuesto, por ejemplo en el caso del IVA es el 21% por lo que tendrias que escribir 0.21`));
        alert(`el valor final seria de ` + (producto + producto * tasa) );
    }
    else if (impuesto == "iva") {
        alert(`el valor final seria de ` + (producto + producto * 0.21) );
    }
    else {
        alert(`el impuesto ingresado no es valido`);
    }
}
else {
    alert(`La opcion ingresada no es valida`);
}
}