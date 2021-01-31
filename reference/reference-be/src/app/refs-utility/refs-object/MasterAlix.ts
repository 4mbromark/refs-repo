import { Alix } from "../refs-db/entity/alixlist";

export class MasterAlix {
    id: number;
    alix: string;

    constructor(
        private a: Alix
    ) {
        this.id = a.id;
        this.alix = a.alix;
    }
}