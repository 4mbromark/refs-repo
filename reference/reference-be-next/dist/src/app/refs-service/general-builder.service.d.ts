import { CustomButton } from "../refs-utility/refs-object/CustomButton";
import { CustomCard } from "../refs-utility/refs-object/CustomCard";
import { CustomInfo } from "../refs-utility/refs-object/CustomInfo";
import { CustomUserinfo } from "../refs-utility/refs-object/CustomUserinfo";
import { BlobService } from "./database-services/blob.service";
import { ButtonService } from "./database-services/button.service";
import { CardService } from "./database-services/card.service";
import { InfoService } from "./database-services/info.service";
import { TextlineService } from "./database-services/textline.service";
import { UserinfoService } from "./database-services/userinfo.service";
export declare class GeneralBuilderService {
    private userinfoService;
    private cardService;
    private textlineService;
    private blobService;
    private infoService;
    private buttonService;
    constructor(userinfoService: UserinfoService, cardService: CardService, textlineService: TextlineService, blobService: BlobService, infoService: InfoService, buttonService: ButtonService);
    getFinalUserinfo(idBoard: number): Promise<CustomUserinfo>;
    getFinalCardList(idBoard: number): Promise<CustomCard[]>;
    getFinalInfoList(idBoard: number, ids: number[]): Promise<CustomInfo[]>;
    getFinalButtonList(idBoard: number, ids: number[]): Promise<CustomButton[]>;
}
