"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var operaciones = __importStar(require("./lib/operaciones"));
var mensaje = 'Hola TS';
console.log(mensaje);
var num1 = 5;
var num2 = 3;
console.log("La suma de ".concat(num1, " y ").concat(num2, " es de ").concat(operaciones.sumar(num1, num2)));
console.log("La resta de ".concat(num1, " y ").concat(num2, " es de ").concat(operaciones.restar(num1, num2)));
console.log("La multiplicacion de ".concat(num1, " y ").concat(num2, " es de ").concat(operaciones.multiplicar(num1, num2)));
console.log("La division de ".concat(num1, " y ").concat(num2, " es de ").concat(operaciones.dividir(num1, num2)));
