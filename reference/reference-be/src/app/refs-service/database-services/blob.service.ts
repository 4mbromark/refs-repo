import { BlobDao } from '../../refs-dao/blob.dao';
import { Blob } from '../../refs-utility/refs-db/entity/board-blob';

var blobDao = BlobDao;

export class BlobService {

    public static async getBlobById(id: number): Promise<Blob> {
        return await blobDao.getBlobById(id);
    }

    public static async getBlobByIdBoardAndId(idBoard: number, id: number): Promise<Blob> {
        return await blobDao.getBlobByIdBoardAndId(idBoard, id);
    }

    public static async insertBlobByIdBoardAndReturnId(idBoard: number, file, type: string): Promise<number> {
        return await blobDao.insertBlobByIdBoardAndReturnId(idBoard, file, type)
    }
}