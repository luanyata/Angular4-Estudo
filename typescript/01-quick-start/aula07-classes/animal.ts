//Export usado para usar a classe por outras classes
// Torna a classe publica

export class Animal {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    // Quando nao 'e informado a visibilidade do metodo o Publico 'e o default
    public move(distanciaEmMetros: number): void {
        console.log(`${this.nome} moveu ${distanciaEmMetros} m.`);
    }
}