import { Tag } from './../refs-utility/refs-enum/word/tag';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminManagerService {

  section: BehaviorSubject<string> = new BehaviorSubject<string>(Tag.ADMIN_HOME);

  constructor() { }

  getSection(): Observable<string> {
    return this.section.asObservable();
  }

  setSection(section: string): void {
    this.section.next(section);
  }
}
