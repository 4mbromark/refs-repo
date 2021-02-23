import { RoutingService } from './routing.service';
import { StorageTag } from './../refs-enum/storage-tag';
import { Injectable } from '@angular/core';
import { Config } from 'protractor';
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageMatchList } from '../refs-language/language-match-list';
import { LanguageTag } from '../refs-language/language-tag';
import { LanguageMatch } from '../refs-object/LanguageMatch';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  matchs = LanguageMatchList.MATCHS;

  language: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private routingService: RoutingService,
    private storageService: StorageService
  ) {
    if (this.storageService.get(StorageTag.STORAGE_LANGUAGE)) {
      this.setLanguageByStorageLanguage();
    } else {
      this.setLanguageByBrowserLanguage();
    }
  }

  getByLanguage(label: string, force?: string): string {
    const lab: LanguageMatch = this.getByLabel(label);
    let language = this.language.value;
    if (force) {
      language = force;
    }
    switch (language) {
      case LanguageTag.ENGLISH: {
        return lab.english;
      }
      case LanguageTag.ITALIAN: {
        return lab.italian;
      }
    }
  }

  getByLabel(label: string): LanguageMatch {
    const text = this.matchs.find(match => match.label === label);
    if (text) {
      return text;
    }
    return this.matchs[0];
  }

  getLanguage(): Observable<string> {
    return this.language.asObservable();
  }

  setLanguage(language: string): void {
    this.language.next(language);
    this.storageService.set(StorageTag.STORAGE_LANGUAGE, language);
    this.routingService.reload();
  }
  setLanguageByStorageLanguage(): void {
    this.language.next(this.storageService.get(StorageTag.STORAGE_LANGUAGE));
  }
  setLanguageByBrowserLanguage(): void {
    const bl = navigator.language.toLowerCase();
    if (bl.includes('it')) {
      this.setLanguage(LanguageTag.ITALIAN);
      return;
    }
    this.setLanguage(LanguageTag.ENGLISH);
  }
}
