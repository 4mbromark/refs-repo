import { MasterAlix } from './../../refs-utility/refs-object/MasterAlix';
import { AkaService } from '../database-services/aka.service';
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

        let masterAlix = null;
        if (alix) {
            const akaList = await akaService.getAkaAlixListByIdAlix(alix.id);
            masterAlix = new MasterAlix(alix, akaList);
        }
        return masterAlix;
    }
}