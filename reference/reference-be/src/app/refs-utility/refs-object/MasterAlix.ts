import { Alix } from "../refs-db/entity/alixlist";

export class MasterAlix {
    id: number;
    alix: string;
    aka: string[];

    constructor(
        a: Alix,
        al: string[]
    ) {
        this.id = a.id;
        this.alix = a.alix;
        this.aka = al;
    }
}