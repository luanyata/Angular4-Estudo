"use strict";
//Export usado para usar a classe por outras classes
// Torna a classe publica
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    // Quando nao 'e informado a visibilidade do metodo o Publico 'e o default
    Animal.prototype.move = function (distanciaEmMetros) {
        console.log(this.nome + " moveu " + distanciaEmMetros + " m.");
    };
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map