// 1. Función validar_numero(callback)
function validar_numero(callback) {
  let dato = prompt("Ingrese un número:");

  if (!isNaN(dato) && dato !== "") {
    callback("Correcto");
  } else {
    callback("Error: Usted ingresó caracteres incorrectos");
  }
}

// Uso de validar_numero
validar_numero(function (mensaje) {
  console.log(mensaje);
});


// 2. Función calcular_y_avisar_despues(numero, callback)
function calcular_y_avisar_despues(numero, callback) {
  let suma = 0;

  for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
      suma += i;
    }
  }

  setTimeout(() => {
    callback(suma);
  }, 5000);
}

// Uso de calcular_y_avisar_despues
calcular_y_avisar_despues(10, function (resultado) {
  console.log(
    `El valor de la sumatoria es ${resultado}. Este resultado se obtuvo hace 5 segundos`
  );
});


// 3. Función calcular_y_avisar_dependiendo(numero, callback, callback_error)
function calcular_y_avisar_dependiendo(numero, callback, callback_error) {
  let total = 0;

  for (let i = 1; i <= numero; i++) {
    total += i;
  }

  if (total < 1000) {
    callback(total);
  } else {
    callback_error(total);
  }
}

// Uso de calcular_y_avisar_dependiendo
calcular_y_avisar_dependiendo(
  50,
  function (resultado) {
    console.log(
      `Las sumatorias sucesivas del número es ${resultado}`
    );
  },
  function (resultado) {
    console.log(
      `El número sobrepasa el objetivo de la función. Resultado: ${resultado}`
    );
  }
);
