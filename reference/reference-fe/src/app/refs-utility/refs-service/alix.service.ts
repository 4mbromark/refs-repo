import { RoutingUrl } from './../refs-routing/routing-url';
import { RoutingService } from './routing.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { StorageTag } from '../refs-enum/storage-tag';
import { HttpClient } from '@angular/common/http';
import { Alix } from '../refs-object/Alix';
import { RestUrl } from '../refs-rest/rest-url';
import { Page } from '../refs-object/Page';

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

  private alix: BehaviorSubject<Alix> = new BehaviorSubject<Alix>(null);

  private pageCode: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private http: HttpClient,
    private routingService: RoutingService,
    private storageService: StorageService
  ) {
    this.routingService.getPath().subscribe((url: string) => {
      this.storageService.set(StorageTag.STORAGE_URL, url);

      const params = url.split('/');
      if (RoutingUrl.ALIX_PROTECTED_URL.includes(params[1])) {
        return;
      }

      if (params.length > 1) {
        this.searchAlix(params[1]).then((alix: Alix) => {
          this.alix.next(alix);
          if (params.length === 3) {
            this.pageCode.next(params[2]);
          }
        }).catch((error) => {
          this.routingService.goToNotFound();
        });
      }
    });
  }

  getAlix(): Observable<Alix> {
    return this.alix.asObservable();
  }

  getPageCode(): Observable<string> {
    return this.pageCode.asObservable();
  }

  searchAlix(url: string): Promise<Alix> {
    return new Promise((resolve, reject) => {
      this.http.post(RestUrl.ALIX, { alix: url }, { responseType: 'json' }).subscribe(
        (alix: Alix) => {
          resolve(alix);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getAlixValue(): Alix {
    return this.alix.value;
  }
}
