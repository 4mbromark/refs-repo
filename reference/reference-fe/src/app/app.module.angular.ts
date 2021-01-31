import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class AngularModules { }
