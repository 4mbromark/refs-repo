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

  alix: BehaviorSubject<Alix> = new BehaviorSubject<Alix>(null);
  page: BehaviorSubject<Page> = new BehaviorSubject<Page>(null);

  constructor(
    private http: HttpClient,
    private routingService: RoutingService,
    private storageService: StorageService
  ) {
    this.routingService.getPath().subscribe((url: string) => {
      this.storageService.set(StorageTag.STORAGE_URL, url);
      const params = url.split('/');

      if (params.length === 0 || params.length === 1) {
        return;
      }

      this.searchAlix(params[1]).then((alix: Alix) => {
        this.alix.next(alix);
        if (params.length === 3) {
          this.searchPage(params[2]).then((page: Page) => {
            this.page.next(page);
          }).catch((error) => {
            this.goToNotFound();
          });
        }
      }).catch((error) => {
        this.goToNotFound();
      });
    });
  }

  getAlix(): Observable<Alix> {
    return this.alix.asObservable();
  }

  getPage(): Observable<Page> {
    return this.page.asObservable();
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

  searchPage(url: string): Promise<Page> {
    return new Promise((resolve, reject) => {
      resolve(new Page());
    });
  }

  goToNotFound(): void {
    this.routingService.goToNotFound();
  }
}
