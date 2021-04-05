import { EditorDirective } from './../refs-utility/refs-object/EditorDirective';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  directive: ReplaySubject<EditorDirective> = new ReplaySubject<EditorDirective>();

  constructor() { }

  public getDirective(): Observable<EditorDirective> {
    return this.directive.asObservable();
  }

  public sendDirective(directive: EditorDirective) {
    this.directive.next(directive);
  }
}
