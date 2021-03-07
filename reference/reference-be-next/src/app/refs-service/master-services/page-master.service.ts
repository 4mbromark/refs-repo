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
import { Injectable } from '@nestjs/common';

@Injectable()
export class PageMasterService {

    constructor(
        private textlineService: TextlineService,
        private blobService: BlobService,
        private pageService: PageService,
        private boardService: BoardService,
        private builder: GeneralBuilderService
    ) {}

    public async getPage(idAlix: number, code: string): Promise<MasterPage> {
        const board = await this.boardService.getBoardByIdAlix(idAlix);
        let page = null
        if (board) {
            page = await this.pageService.getPageByIdBoardAndCode(board.id, code);
        }

        let masterPage = null;
        if (page) {
            const idBoard = page.idBoard;

            const title = await this.textlineService.getTextlineByIdBoardAndId(idBoard, page.title);
            const subtitle = await this.textlineService.getTextlineByIdBoardAndId(idBoard, page.subtitle);
    
            const avatar = await this.blobService.getBlobByIdBoardAndId(idBoard, page.avatar);
            const image = await this.blobService.getBlobByIdBoardAndId(idBoard, page.image);
    
            const finalInfoList = await this.builder.getFinalInfoList(idBoard, ServiceUtil.getNumberArrayByString(page.infoList));
            const finalButtonList = await this.builder.getFinalButtonList(idBoard, ServiceUtil.getNumberArrayByString(page.buttonList));
    
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