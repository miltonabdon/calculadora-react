import React from "react";

function CalculadoraService() {
  function calcular(numero1, numero2, operacao) {
    let resultado;

    switch (operacao) {
      case "+":
        resultado = numero1 + numero2;
        break;

      default:
        break;
    }
    return resultado;
  }

  return [calcular];
}

export default CalculadoraService;
