import { Info } from './../refs-db/entity/board-info';
export class CustomInfo {
    id: number;
    type: string;
    info: string[];
    contextOrder: number;

    constructor(
        i: Info
    ) {
        this.id = i.id;
        this.type = i.type;
        this.info = i.info.split(";");
        this.contextOrder = i.contextOrder;
    }
}