import { BehaviorSubject, Observable } from 'rxjs';
import { MasterAlix } from './../refs-utility/refs-object/database/master/MasterAlix';
import { CustomCard } from '../refs-utility/refs-object/database/custom/CustomCard';
import { MasterBoard } from '../refs-utility/refs-object/database/master/MasterBoard';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestUrl } from '../refs-utility/refs-rest/rest-url';
import { MasterPage } from '../refs-utility/refs-object/database/master/MasterPage';
import { MasterAlixWithContextDetail } from '../refs-utility/refs-object/database/master/MasterAlixWithContextDetail';
import { ContextType } from '../refs-utility/refs-enum/context-type';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private context: BehaviorSubject<MasterBoard | MasterPage> = new BehaviorSubject<MasterBoard | MasterPage>(null);

  constructor(
    private http: HttpClient
  ) { }

  public getContext(): Observable<MasterBoard | MasterPage> {
    return this.context.asObservable();
  }

  public loadContext(alix: MasterAlixWithContextDetail): Promise<void> {
    switch (alix.contextType) {
      case ContextType.BOARD: {
        return this.loadBoard(alix._id);
      }
      case ContextType.PAGE: {
        return this.loadPage(alix._id, alix.contextId);
      }
    }
  }

  private loadBoard(idAx: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post(RestUrl.CONTEXT_BOARD, { idAlix: idAx }, { responseType: 'json' }).subscribe(
        (board: MasterBoard) => {
          this.context.next(board);
          resolve();
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

  private loadPage(idAx: string, cd: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post(RestUrl.CONTEXT_PAGE, { idAlix: idAx, code: cd }, { responseType: 'json' }).subscribe(
        (page: MasterPage) => {
          this.context.next(page);
          resolve();
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

  public getCard(_id: string): Promise<CustomCard> {
    return new Promise((resolve, reject) => {
      this.http.get(RestUrl.CARD_GETBYID + _id, { responseType: 'json' }).subscribe(
        (card: CustomCard) => {
          resolve(card);
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }
}
