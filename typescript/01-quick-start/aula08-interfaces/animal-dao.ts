import { DaoInterface } from "./dao.interface";
import { Animal } from "../aula07-classes/animal";

export class AnimalDao implements DaoInterface {
    tableName: string = "";

    insert(animal: Animal): boolean {
        console.log("Inserting");
        animal.move(50);
        return true
    }
    update(animal: Animal): boolean {
        return true;
    }
    delete(id: number): Animal {
        return null;
    }
    find(id: number): Animal {
        return null;
    }
    findAll(): [Animal] {
        return null;
    }
}