import { Op } from "sequelize";
import { Blob } from "../refs-utility/refs-db/entity/board-blob";

export class BlobDao {
    public static async getBlobById(id: number): Promise<Blob> { 
        const blob = await Blob.findByPk(id);
        return blob;
    }

    public static async getBlobByIdBoardAndId(idBoard: number, id: number): Promise<Blob> { 
        const blob = await Blob.findOne({
            where: {
                [Op.and]: {
                    idBoard: { [Op.eq]: idBoard },
                    id: { [Op.eq]: id }
                }
            }
        });
        return blob;
    }

    public static async insertBlobByIdBoardAndReturnId(idBoard: number, file, type: string): Promise<number> {
        const blob = await Blob.create({
            idBoard: idBoard,
            file: file,
            type: type
        });
        return blob.id;
    }
}
