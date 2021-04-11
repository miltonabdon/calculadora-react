import React from "react";
import ReactDOM from "react-dom";
import CalculadoraService from "./Calculadora.Service";

describe("Teste do CalculadoraService", () => {
  const [calcular] = CalculadoraService();

  it("deve garantir que 1 + 4 = 5", () => {
    let soma = calcular(1, 4, "+");
    expect(soma).toEqual(5);
  });
  it("deve garantir que 3 - 1 = 2", () => {
    let subtracao = calcular(3, 1, "-");
    expect(subtracao).toEqual(2);
  });
  it("deve garantir que 2 * 2 = 4", () => {
    let multiplicacao = calcular(2, 2, "*");
    expect(multiplicacao).toEqual(4);
  });
  it("deve garantir que 8 / 2 = 4", () => {
    let divisao = calcular(8, 2, "/");
    expect(divisao).toEqual(4);
  });
});
