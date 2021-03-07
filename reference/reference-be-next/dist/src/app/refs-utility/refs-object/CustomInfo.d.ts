import { Info } from './../refs-db/entity/board-info';
export declare class CustomInfo {
    id: number;
    type: string;
    info: string[];
    contextOrder: number;
    constructor(i: Info);
}
