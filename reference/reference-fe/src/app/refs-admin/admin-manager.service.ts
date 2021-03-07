import { Tag } from './../refs-utility/refs-enum/word/tag';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminManagerService {

  section: BehaviorSubject<Tag> = new BehaviorSubject<Tag>(Tag.ADMIN_HOME);

  constructor() { }

  getSection(): Observable<Tag> {
    return this.section.asObservable();
  }

  setSection(section: Tag): void {
    this.section.next(section);
  }
}
