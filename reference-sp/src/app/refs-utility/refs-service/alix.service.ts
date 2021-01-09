import { StaticInfo } from './../refs-static/StaticInfo';
// tslint:disable: no-switch-case-fall-through
import { RoutingService } from './routing.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { StorageTag } from '../refs-enum/storage-tag';

@Injectable({
  providedIn: 'root'
})
export class AlixService {

  alix: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  page: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  alixs = ['4mbromark'];

  constructor(
    private routingService: RoutingService,
    private storageService: StorageService
  ) {
    this.routingService.getPath().subscribe((url: string) => {
      this.storageService.set(StorageTag.STORAGE_URL, url);
      const params = url.split('/');
      switch (params.length) {
        case 3: {
          if (StaticInfo.PAGE_LIST.find(p => params[2] === p.page)) {
            this.page.next(params[2]);
          } else {
            this.routingService.goToNotFound();
          }
        }
        case 2: {
          if (this.alixs.find(a => params[1] === a)) {
            this.alix.next(params[1]);
          } else {
            this.routingService.goToNotFound();
          }
        }
      }
    });
  }

  getAlix(): Observable<string> {
    return this.alix.asObservable();
  }

  getPage(): Observable<string> {
    return this.page.asObservable();
  }
}
