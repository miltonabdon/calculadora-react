import React from "react";
import ReactDOM from "react-dom";
import CalculadoraService from "./Calculadora.Service";

describe("Teste do CalculadoraService", () => {
  const [calcular, concatenarNumero, SOMA, SUBTRACAO, MULTIPLICAO, DIVISAO] = CalculadoraService();

  it("deve garantir que 1 + 4 = 5", () => {
    let soma = calcular(1, 4, SOMA);
    expect(soma).toEqual(5);
  });
  it("deve garantir que 3 - 1 = 2", () => {
    let subtracao = calcular(3, 1, SUBTRACAO);
    expect(subtracao).toEqual(2);
  });
  it("deve garantir que 2 * 2 = 4", () => {
    let multiplicacao = calcular(2, 2, MULTIPLICAO);
    expect(multiplicacao).toEqual(4);
  });
  it("deve garantir que 8 / 2 = 4", () => {
    let divisao = calcular(8, 2, DIVISAO);
    expect(divisao).toEqual(4);
  });

  it("deve retornar 0 para operação invalida",  () => {
    let operacaoInvalida = calcular(1,4,'%')
    expect(operacaoInvalida).toEqual(0);
  })
});
