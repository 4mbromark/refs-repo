import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StandardSnackbarComponent } from '../refs-standard/standard-snackbar/standard-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  newMessage(message: string, duration?: number): void {
    this.openMessage(message, duration);
  }

  private openMessage(message: string, duration?: number): void {
    this.snackBar.open(message, null, {
      duration: duration ? duration : 2000,
    });
    /*this.snackBar.openFromComponent(StandardSnackbarComponent, {
      duration: duration ? duration : 2000,
    });*/
  }

}
