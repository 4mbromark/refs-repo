import { Blob } from "../refs-db/entity/board-blob";
export declare class CustomBlob {
    id: number;
    type: string;
    file: string;
    constructor(blob: Blob);
}
