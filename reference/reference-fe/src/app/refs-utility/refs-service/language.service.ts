import { LanguageTag } from './../refs-language/language-tag';
import { LanguageLabel } from './../refs-language/language-label';
import { LanguageMatch } from './../refs-object/LanguageMatch';
import { RoutingService } from './routing.service';
import { StorageTag } from './../refs-enum/storage-tag';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageMatchList } from '../refs-language/language-match-list';
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

  getByLanguage(label: LanguageLabel, force?: string): string {
    const lab: LanguageMatch = this.getByLabel(label);
    let language = this.language.value;
    if (force) {
      language = force;
    }
    switch (language) {
      case LanguageTag.ITALIAN: {
        return lab.italian;
      }
      default: {
        return lab.english;
      }
    }
  }

  getByLabel(label: LanguageLabel): LanguageMatch {
    const text = this.matchs.find(match => match.label === label);
    if (text) {
      return text;
    }
    return this.matchs[0];
  }

  getLanguage(): Observable<string> {
    return this.language.asObservable();
  }

  setLanguage(language: LanguageTag): void {
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
      this.setLanguage(LanguageTag.ITALIAN);
      return;
    }
    this.setLanguage(LanguageTag.ENGLISH);
  }
}
