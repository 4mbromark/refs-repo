import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Board } from '../refs-utility/refs-object/Board';
import { RestUrl } from '../refs-utility/refs-rest/rest-url';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private http: HttpClient
  ) { }

  loadBoard(idAlix: number): Promise<Board> {
    return new Promise((resolve, reject) => {
      this.http.post(RestUrl.BOARD, { idAlix: idAlix }, { responseType: 'json' }).subscribe(
        (board: Board) => {
          resolve(board);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
