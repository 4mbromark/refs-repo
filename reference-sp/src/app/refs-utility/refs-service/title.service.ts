import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(
    private title: Title
  ) { }

  setTitleStandard(): void {
    this.setTitle('High Five Reference');
  }

  setTitleWithAlix(alix: string): void {
    const title = alix + ' - Reference';
    this.setTitle(title);
  }
  setTitleWithPage(alix: string, page: string): void {
    const title = alix + '/' + page + ' - Reference';
    this.setTitle(title);
  }

  private setTitle(title: string): void {
    this.title.setTitle(title);
  }
}
