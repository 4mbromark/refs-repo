import { RoutingService } from './routing.service';
import { StorageTag } from '../refs-enum/storage-tag';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '../refs-language/language-code';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private language: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private translate: TranslateService,
    private routingService: RoutingService,
    private storageService: StorageService
  ) {
    if (this.storageService.get(StorageTag.STORAGE_LANGUAGE)) {
      this.setLanguageByStorageLanguage();
    } else {
      this.setLanguageByBrowserLanguage();
    }
  }

  getLanguage(): Observable<string> {
    return this.language.asObservable();
  }

  setLanguage(language: LanguageCode): void {
    this.language.next(language);
    this.storageService.set(StorageTag.STORAGE_LANGUAGE, language);
    this.routingService.reload();
  }
  setLanguageByStorageLanguage(): void {
    const language = this.storageService.get(StorageTag.STORAGE_LANGUAGE);
    this.language.next(language);
  }
  setLanguageByBrowserLanguage(): void {
    const bl = navigator.language.toLowerCase();
    if (bl.includes('it')) {
      this.setLanguage(LanguageCode.ITALIAN);
      return;
    }
    this.setLanguage(LanguageCode.ENGLISH);
  }
}
