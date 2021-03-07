import { Blob } from "../refs-utility/refs-db/entity/board-blob";
export declare class BlobDao {
    getBlobById(id: number): Promise<Blob>;
    getBlobByIdBoardAndId(idBoard: number, id: number): Promise<Blob>;
    insertBlobByIdBoardAndReturnId(idBoard: number, file: any, type: string): Promise<number>;
}
