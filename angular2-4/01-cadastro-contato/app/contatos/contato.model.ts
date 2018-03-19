export class Contato {

    // O Ts tem este facilitador para evitar a escrita dos Getters e Setters
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public telefone: string
    ) {

    }
}