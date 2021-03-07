import { BlobService } from './../database-services/blob.service';
import { PageService } from './../database-services/page.service';
import { GeneralBuilderService } from './../general-builder.service';
import { MasterPage } from '../../refs-utility/refs-object/MasterPage';
import { TextlineService } from '../database-services/textline.service';
import { BoardService } from '../database-services/board.service';
export declare class PageMasterService {
    private textlineService;
    private blobService;
    private pageService;
    private boardService;
    private builder;
    constructor(textlineService: TextlineService, blobService: BlobService, pageService: PageService, boardService: BoardService, builder: GeneralBuilderService);
    getPage(idAlix: number, code: string): Promise<MasterPage>;
}
