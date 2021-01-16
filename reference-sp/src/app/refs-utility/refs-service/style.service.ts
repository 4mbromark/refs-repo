import { CustomTextline } from './../refs-object/CustomTextline';
import { Injectable } from '@angular/core';
import { CustomButton } from '../refs-object/CustomButton';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }

  getTextStyle(text: CustomTextline): string {
    let style = '';
    if (text.color) {
      style += 'color: ' + text.color + ' !important; ';
    }
    if (text.weight) {
      style += 'font-weight: ' + text.weight + ' !important; ';
    }
    return style;
  }

  getButtonStyle(button: CustomButton): string {
    let style = '';
    if (button.border) {
      style += 'border-color: ' + button.border + '; ';
    }
    if (button.radius) {
      style += 'border-radius: ' + button.radius + '%; ';
    }
    if (button.background) {
      style += 'background-color: ' + button.background + '; ';
    }
    return style;
  }
}
