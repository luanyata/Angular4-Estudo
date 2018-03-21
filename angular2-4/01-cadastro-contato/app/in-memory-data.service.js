"use strict";
class InMemoryDataService {
    createDb() {
        let contatos = [
            { id: 1, name: "Luan", email: "luanyata@gmail.com", telefone: "(48) 97650058" },
            { id: 2, name: "Fernanda", email: "fer.lima1995@gmail.com", telefone: "(48) 09000000" },
            { id: 3, name: "Vitor", email: "vitorlima@gmail.com", telefone: "00000000" },
            { id: 3, name: "Marli", email: "Marli@gmail.com", telefone: "00000000" },
            { id: 3, name: "Vagner", email: "Vagner@gmail.com", telefone: "00000000" },
        ];
        return { contatos };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map