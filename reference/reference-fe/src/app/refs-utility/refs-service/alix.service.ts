import { MasterAlixWithContextDetail } from '../refs-object/database/master/MasterAlixWithContextDetail';
import { RoutingUrl } from '../refs-routing/routing-url';
import { RoutingService } from './routing.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { StorageTag } from '../refs-enum/storage-tag';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MasterAlix } from '../refs-object/database/master/MasterAlix';
import { RestUrl } from '../refs-rest/rest-url';
import { ContextType } from '../refs-enum/context-type';

/*
░█████╗░██╗░░░░░██╗██╗░░██╗  ██████╗░░█████╗░░█████╗░██████╗░██████╗░  ░██████╗██╗░░░██╗░██████╗████████╗███████╗███╗░░░███╗
██╔══██╗██║░░░░░██║╚██╗██╔╝  ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗  ██╔════╝╚██╗░██╔╝██╔════╝╚══██╔══╝██╔════╝████╗░████║
███████║██║░░░░░██║░╚███╔╝░  ██████╦╝██║░░██║███████║██████╔╝██║░░██║  ╚█████╗░░╚████╔╝░╚█████╗░░░░██║░░░█████╗░░██╔████╔██║
██╔══██║██║░░░░░██║░██╔██╗░  ██╔══██╗██║░░██║██╔══██║██╔══██╗██║░░██║  ░╚═══██╗░░╚██╔╝░░░╚═══██╗░░░██║░░░██╔══╝░░██║╚██╔╝██║
██║░░██║███████╗██║██╔╝╚██╗  ██████╦╝╚█████╔╝██║░░██║██║░░██║██████╔╝  ██████╔╝░░░██║░░░██████╔╝░░░██║░░░███████╗██║░╚═╝░██║
╚═╝░░╚═╝╚══════╝╚═╝╚═╝░░╚═╝  ╚═════╝░░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░  ╚═════╝░░░░╚═╝░░░╚═════╝░░░░╚═╝░░░╚══════╝╚═╝░░░░░╚═╝
*/


@Injectable({
  providedIn: 'root'
})
export class AlixService {

  private alix: BehaviorSubject<MasterAlixWithContextDetail> = new BehaviorSubject<MasterAlixWithContextDetail>(null);

  constructor(
    private http: HttpClient,
    private routingService: RoutingService,
    private storageService: StorageService
  ) {
    this.routingService.getPath().subscribe((url: string) => {
      this.storageService.set(StorageTag.STORAGE_URL, url);

      const params = url.split('/');
      const alixUrl = this.getAlixUrl(params);

      if (alixUrl) {
        this.searchAlix(alixUrl[0]).then((alix: MasterAlix) => {
          const alixWithContext = this.buildContextDetail(alix, alixUrl);

          this.alix.next(alixWithContext);
        }).catch((error: HttpErrorResponse) => {
          this.routingService.goToNotFound();
        });
      }
    });
  }

  public getAlix(): Observable<MasterAlixWithContextDetail> {
    return this.alix.asObservable();
  }

  private searchAlix(url: string): Promise<MasterAlix> {
    return new Promise((resolve, reject) => {
      this.http.post(RestUrl.ALIX, { alixName: url }, { responseType: 'json' }).subscribe(
        (alix: MasterAlix) => {
          resolve(alix);
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

  public getAlixList(idUser: string): Promise<MasterAlix[]> {
    return new Promise((resolve, reject) => {
      this.http.get(RestUrl.ALIX_LIST + idUser, { responseType: 'json' }).subscribe(
        (alixList: MasterAlix[]) => {
          resolve(alixList);
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

  private getAlixUrl(url: string[]): string[] {
    let alixUrl = null;
    if (url.length > 1 && !RoutingUrl.ALIX_PROTECTED_URL.includes(url[1])) {
      alixUrl = [url[1]];
      if (url.length === 3) {
        alixUrl.push(url[2]);
      }
    }
    return alixUrl;
  }

  private buildContextDetail(alix: MasterAlix, alixUrl: string[]): MasterAlixWithContextDetail {
    const alixWithContext = alix as MasterAlixWithContextDetail;

    if (alixUrl.length === 2) {
      alixWithContext.contextId = alixUrl[1];
      alixWithContext.contextType = ContextType.PAGE;
    } else {
      alixWithContext.contextId = alix._id;
      alixWithContext.contextType = ContextType.BOARD;
    }

    return alixWithContext;
  }
}
