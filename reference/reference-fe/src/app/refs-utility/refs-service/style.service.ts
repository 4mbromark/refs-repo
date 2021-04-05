import { BehaviorSubject, Observable } from 'rxjs';
import { CustomTextline } from '../refs-object/database/custom/CustomTextline';
import { Injectable } from '@angular/core';
import { CustomButton } from '../refs-object/database/custom/CustomButton';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  private smartphone: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  isSmartphone(): Observable<boolean> {
    return this.smartphone.asObservable();
  }

  checkSmartphone(size: number) {
    if (this.smartphone.value && size > 500) {
      this.smartphone.next(false);
    } else if (!this.smartphone.value && size < 500) {
      this.smartphone.next(true);
    }
  }

  getTextStyle(text: CustomTextline): string {
    let style = '';
    /* if (text.color) {
      style += 'color: ' + text.color + ' !important; ';
    }
    if (text.weight) {
      style += 'font-weight: ' + text.weight + ' !important; ';
    } */
    return style;
  }

  getButtonStyle(button: CustomButton): string {
    let style = '';
    /* if (button.border) {
      style += 'border-color: ' + button.border + '; ';
    }
    if (button.radius) {
      style += 'border-radius: ' + button.radius + '%; ';
    }
    if (button.background) {
      style += 'background-color: ' + button.background + '; ';
    } */
    return style;
  }
}
