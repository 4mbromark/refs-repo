import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Board } from '../refs-utility/refs-object/Board';
import { Page } from '../refs-utility/refs-object/Page';
import { RestUrl } from '../refs-utility/refs-rest/rest-url';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private http: HttpClient
  ) { }

  loadBoard(idAx: number): Promise<Board> {
    return new Promise((resolve, reject) => {
      this.http.post(RestUrl.BOARD, { idAlix: idAx }, { responseType: 'json' }).subscribe(
        (board: Board) => {
          resolve(board);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  loadPage(idAx: number, cd: string): Promise<Page> {
    return new Promise((resolve, reject) => {
      this.http.post(RestUrl.PAGE, { idAlix: idAx, code: cd }, { responseType: 'json' }).subscribe(
        (page: Page) => {
          resolve(page);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
