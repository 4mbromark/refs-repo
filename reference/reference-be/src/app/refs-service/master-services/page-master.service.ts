import { BlobService } from './../database-services/blob.service';
import { ServiceUtil } from './../../refs-utility/refs-util/service-util';
import { PageService } from './../database-services/page.service';
import { GeneralBuilderService } from './../general-builder.service';
import { Page } from '../../refs-utility/refs-db/entity/board-page';
import { MasterPage } from '../../refs-utility/refs-object/MasterPage';
import { CustomTextline } from '../../refs-utility/refs-object/CustomTextline';
import { CustomBlob } from '../../refs-utility/refs-object/CustomBlob';
import { TextlineService } from '../database-services/textline.service';

var textlineService = TextlineService;
var blobService = BlobService;

var pageService = PageService;

export class PageMasterService extends GeneralBuilderService {

    public static async getPage(idBoard: number, id: number): Promise<MasterPage> {
        const page = await pageService.getPageByIdBoardAndId(idBoard, id);

        const title = await textlineService.getTextlineByIdBoardAndId(idBoard, page.title);
        const subtitle = await textlineService.getTextlineByIdBoardAndId(idBoard, page.subtitle);

        const avatar = await blobService.getBlobByIdBoardAndId(idBoard, page.avatar);
        const image = await blobService.getBlobByIdBoardAndId(idBoard, page.image);

        const finalInfoList = await this.getFinalInfoList(idBoard, ServiceUtil.getNumberArrayByString(page.infoList));
        const finalButtonList = await this.getFinalButtonList(idBoard, ServiceUtil.getNumberArrayByString(page.buttonList));

        return new MasterPage(
            page,
            new CustomTextline(title),
            new CustomTextline(subtitle),
            new CustomBlob(avatar),
            new CustomBlob(image),
            finalInfoList,
            finalButtonList
        );
    }

    public static async getPageById(id: number): Promise<Page> {
        return await pageService.getPageById(id);
    }
}