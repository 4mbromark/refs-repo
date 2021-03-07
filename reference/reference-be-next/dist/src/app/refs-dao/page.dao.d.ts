import { Page } from '../refs-utility/refs-db/entity/board-page';
export declare class PageDao {
    getPageById(id: number): Promise<Page>;
    getPageByIdBoardAndId(idBoard: number, id: number): Promise<Page>;
    getPageByIdBoardAndCode(idBoard: number, code: string): Promise<Page>;
}
