import { Injectable } from "@nestjs/common";
import { CustomBlob } from "../refs-utility/refs-object/CustomBlob";
import { CustomButton } from "../refs-utility/refs-object/CustomButton";
import { CustomCard } from "../refs-utility/refs-object/CustomCard";
import { CustomInfo } from "../refs-utility/refs-object/CustomInfo";
import { CustomTextline } from "../refs-utility/refs-object/CustomTextline";
import { CustomUserinfo } from "../refs-utility/refs-object/CustomUserinfo";
import { ServiceUtil } from "../refs-utility/refs-util/service-util";
import { BlobService } from "./database-services/blob.service";
import { ButtonService } from "./database-services/button.service";
import { CardService } from "./database-services/card.service";
import { InfoService } from "./database-services/info.service";
import { TextlineService } from "./database-services/textline.service";
import { UserinfoService } from "./database-services/userinfo.service";

@Injectable()
export class GeneralBuilderService {

    constructor(
        private userinfoService: UserinfoService,
        private cardService: CardService,
        private textlineService: TextlineService,
        private blobService: BlobService,
        private infoService: InfoService,
        private buttonService: ButtonService
    ) {}

    public async getFinalUserinfo(idBoard: number): Promise<CustomUserinfo> {
        const userinfo = await this.userinfoService.getUserinfoByIdBoardOrCreate(idBoard);

        const sentence = await this.textlineService.getTextlineByIdBoardAndId(idBoard, userinfo.sentence);
        const profile = await this.textlineService.getTextlineByIdBoardAndId(idBoard, userinfo.profile);
        const avatar = await this.blobService.getBlobByIdBoardAndId(idBoard, userinfo.avatar);

        const finalInfoList = await this.getFinalInfoList(idBoard, ServiceUtil.getNumberArrayByString(userinfo.infoList));
        const finalButtonList = await this.getFinalButtonList(idBoard, ServiceUtil.getNumberArrayByString(userinfo.buttonList));   

        return new CustomUserinfo(
            userinfo,
            sentence ? new CustomTextline(sentence) : null,
            profile ? new CustomTextline(profile) : null,
            avatar ? new CustomBlob(avatar) : null,
            finalInfoList,
            finalButtonList
        );
    }

    public async getFinalCardList(idBoard: number): Promise<CustomCard[]> {
        const cardList = await this.cardService.getCardListByIdBoard(idBoard);
        let finalCardList = [];
        for (let card of cardList) {
            const title = await this.textlineService.getTextlineByIdBoardAndId(idBoard, card.title);
            const subtitle = await this.textlineService.getTextlineByIdBoardAndId(idBoard, card.subtitle);
            const avatar = await this.blobService.getBlobByIdBoardAndId(idBoard, card.avatar);
            const image = await this.blobService.getBlobByIdBoardAndId(idBoard, card.image);

            const finalInfoList = await this.getFinalInfoList(idBoard, ServiceUtil.getNumberArrayByString(card.infoList));
            const finalButtonList = await this.getFinalButtonList(idBoard, ServiceUtil.getNumberArrayByString(card.buttonList));            

            const finalCard = new CustomCard(
                card,
                title ? new CustomTextline(title) : null,
                subtitle ? new CustomTextline(subtitle) : null,
                avatar ? new CustomBlob(avatar) : null,
                image ? new CustomBlob(image) : null,
                finalInfoList,
                finalButtonList);
            finalCardList.push(finalCard);
        }
        return finalCardList;
    }

    public async getFinalInfoList(idBoard: number, ids: number[]): Promise<CustomInfo[]> {
        const infoList = await this.infoService.getInfoListByIdBoardAndIds(idBoard, ids);
        const finalInfoList = [];
        for (let info of infoList) {
            finalInfoList.push(new CustomInfo(info));
        }
        return finalInfoList;
    }

    public async getFinalButtonList(idBoard: number, ids: number[]): Promise<CustomButton[]> {
        const buttonList = await this.buttonService.getButtonListByIdBoardAndIds(idBoard, ids);
        const finalButtonList = []
        for (let button of buttonList) {
            const title = await this.textlineService.getTextlineByIdBoardAndId(idBoard, button.title);
            const subtitle = await this.textlineService.getTextlineByIdBoardAndId(idBoard, button.subtitle);

            const finalButton = new CustomButton(
                button,
                title ? new CustomTextline(title) : null,
                subtitle ? new CustomTextline(subtitle) : null
            );
            finalButtonList.push(finalButton);
        }
        return finalButtonList;
    }
}