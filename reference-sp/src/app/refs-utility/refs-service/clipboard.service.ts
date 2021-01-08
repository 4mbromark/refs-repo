import { SnackbarService } from './snackbar.service';
import { Injectable } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor(
    private clipboard: Clipboard,
    private snackbarService: SnackbarService
  ) { }

  copy(value: string): void {
    this.clipboard.copy(value);
  }

  copyWithMessage(value: string, message?: string): void {
    this.copy(value);
    this.showMessage(value, message);
  }

  private showMessage(value: string, message?: string): void {
    let msg = message ? message : 'Copiato!';
    msg += ' 📋 ';
    msg += value;
    this.snackbarService.newMessage(msg);
  }
}
