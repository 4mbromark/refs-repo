import { AlixMasterService } from './alix-master.service';
import { MasterAlix } from './../../refs-utility/refs-object/MasterAlix';
import { BlobService } from './../database-services/blob.service';
import { ServiceUtil } from './../../refs-utility/refs-util/service-util';
import { PageService } from './../database-services/page.service';
import { GeneralBuilderService } from './../general-builder.service';
import { MasterPage } from '../../refs-utility/refs-object/MasterPage';
import { CustomTextline } from '../../refs-utility/refs-object/CustomTextline';
import { CustomBlob } from '../../refs-utility/refs-object/CustomBlob';
import { TextlineService } from '../database-services/textline.service';
import { BoardService } from '../database-services/board.service';

var textlineService = TextlineService;
var blobService = BlobService;

var pageService = PageService;
var boardService = BoardService;

export class PageMasterService extends GeneralBuilderService {

    public static async getPage(idAlix: number, code: string): Promise<MasterPage> {
        const board = await boardService.getBoardByIdAlix(idAlix);
        let page = null
        if (board) {
            page = await pageService.getPageByIdBoardAndCode(board.id, code);
        }

        let masterPage = null;
        if (page) {
            const idBoard = page.idBoard;

            const title = await textlineService.getTextlineByIdBoardAndId(idBoard, page.title);
            const subtitle = await textlineService.getTextlineByIdBoardAndId(idBoard, page.subtitle);
    
            const avatar = await blobService.getBlobByIdBoardAndId(idBoard, page.avatar);
            const image = await blobService.getBlobByIdBoardAndId(idBoard, page.image);
    
            const finalInfoList = await this.getFinalInfoList(idBoard, ServiceUtil.getNumberArrayByString(page.infoList));
            const finalButtonList = await this.getFinalButtonList(idBoard, ServiceUtil.getNumberArrayByString(page.buttonList));
    
            masterPage = new MasterPage(
                page,
                title ? new CustomTextline(title) : null,
                subtitle ? new CustomTextline(subtitle) : null,
                avatar ? new CustomBlob(avatar) : null,
                image ? new CustomBlob(image) : null,
                finalInfoList,
                finalButtonList
            );
        }
        return masterPage;        
    }
}