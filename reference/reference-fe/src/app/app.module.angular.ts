import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,

    NgxSpinnerModule
  ]
})
export class AngularModules { }
