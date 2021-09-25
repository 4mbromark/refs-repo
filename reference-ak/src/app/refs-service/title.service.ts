import { BaseValue } from './../refs-content/BaseValue';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(
    private title: Title
  ) { }

  public setTitleWithBoard(): void {
    const title = BaseValue.PAGE_TITLE;
    this.setTitle(title);
  }
  public setTitleWithPage(page: string): void {
    const title = page + ' - ' + BaseValue.PAGE_TITLE;
    this.setTitle(title);
  }

  private setTitle(title: string): void {
    this.title.setTitle(title);
  }
}
