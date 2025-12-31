// 1. Función validar_numero(callback_ok, callback_error)
function validar_numero(callback_ok, callback_error) {
  let dato = prompt("Ingrese un número:");
  let numero = Number(dato);

  if (!isNaN(numero) && dato !== "") {
    callback_ok(numero);
  } else {
    callback_error("Usted ingresó caracteres incorrectos");
  }
}

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

// 3. Función calcular_y_avisar_dependiendo(numero, callback, callback_error)
function calcular_y_avisar_dependiendo(numero, callback, callback_error) {
  let total = 0;
  let sumaParcial = 0;

  for (let i = 1; i <= numero; i++) {
    sumaParcial += i;
    total += sumaParcial;
  }

  if (total < 1000) {
    callback(total);
  } else {
    callback_error(total);
  }
}

// =======================
// EJECUCIÓN ENCADENADA
// =======================

validar_numero(
  function (numero) {
    console.log("Correcto. Número ingresado:", numero);

    calcular_y_avisar_despues(numero, function (resultado) {
      console.log(
        `El valor de la sumatoria es ${resultado}. Este resultado se obtuvo hace 5 segundos`
      );
    });

    calcular_y_avisar_dependiendo(
      numero,
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
  },
  function (mensaje) {
    console.error("Error:", mensaje);
  }
);
