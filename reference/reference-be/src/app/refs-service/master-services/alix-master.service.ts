import { MasterAlix } from './../../refs-utility/refs-object/MasterAlix';
import { AkaService } from '../database-services/aka.service';
import { Alix } from '../../refs-utility/refs-db/entity/alixlist';
import { AlixService } from '../database-services/alix.service';

var alixService = AlixService;
var akaService = AkaService;

export class AlixMasterService {

    public static async getAlix(a: string): Promise<MasterAlix> {
        let alix = await alixService.getAlixByAlix(a);
        if (!alix) {
            const aka = await akaService.getAkaByAlix(a);
            if (aka) {
                alix = await alixService.getAlixById(aka.idAlix);
            }
        }
        if (alix) {
            const akaList = await akaService.getAkaAlixListByIdAlix(alix.id);
            return new MasterAlix(alix, akaList);
        }
        return null;
    }

    public static async getAlixById(id: number): Promise<Alix> {
        return await alixService.getAlixById(id);
    }

    public static async getAlixByIdUser(idUser: number): Promise<Alix[]> {
        return await alixService.getAlixByIdUser(idUser);
    }

    public static async getAlixByAlixAndIdUser(a: string, idUser: number): Promise<Alix> { 
        return await alixService.getAlixByAlixAndIdUser(a, idUser);
    }
}