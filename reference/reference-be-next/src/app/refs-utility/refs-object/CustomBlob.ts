import { Blob } from "../refs-db/entity/board-blob";

export class CustomBlob {
    id: number;
    type: string;
    file: string;

    constructor(
        blob: Blob
    ) {
        this.id = blob.id;
        this.type = blob.type;
        this.file = Buffer.from(blob.file).toString();
    }
}