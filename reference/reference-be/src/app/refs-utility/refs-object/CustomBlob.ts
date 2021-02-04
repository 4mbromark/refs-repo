import { Blob } from "../refs-db/entity/board-blob";

export class CustomBlob {
    id: number;
    type: string;
    file: File;

    constructor(
        blob: Blob
    ) {
        this.id = blob.id;
        this.type = blob.type;
        this.file = blob.file;
    }
}