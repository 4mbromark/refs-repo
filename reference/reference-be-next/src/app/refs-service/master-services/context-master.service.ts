import { PageService } from './../database-services/page.service';
import { ContextMasterInterface } from './context-master.interface';
import { BoardService } from '../database-services/board.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { MasterBoard } from '../../refs-object/master/MasterBoard';
import { MasterPage } from '../../refs-object/master/MasterPage';
import { ObjectId } from 'mongoose';

@Injectable()
export class ContextMasterService implements ContextMasterInterface {

    constructor(
        private boardService: BoardService,
        private pageService: PageService
    ) {}

    public async getBoard(idAlix: ObjectId): Promise<MasterBoard> {
        const board = await this.boardService.getBoardByIdAlixOrCreate(idAlix);
        return new MasterBoard(board);
    }

    public async getPage(idAlix: ObjectId, code: string): Promise<MasterPage> {
        const page = await this.pageService.getPageByIdAlixAndCode(idAlix, code);

        if (page) {   
            return new MasterPage(page);
        }
        throw new NotFoundException();       
    }
}