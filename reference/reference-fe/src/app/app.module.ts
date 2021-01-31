import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// ANGULAR MATERIAL MODULES
import { AngularModules } from './app.module.angular';

// FA ICONS
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './refs-board/board.component';
import { BoardUserinfoComponent } from './refs-board/board-userinfo/board-userinfo.component';
import { BoardFooterComponent } from './refs-board/board-footer/board-footer.component';
import { BoardCardlistComponent } from './refs-board/board-cardlist/board-cardlist.component';
import { BoardButtonsComponent } from './refs-board/board-customobjects/board-buttons/board-buttons.component';
import { BoardInfosComponent } from './refs-board/board-customobjects/board-infos/board-infos.component';
import { StandardSnackbarComponent } from './refs-utility/refs-standard/standard-snackbar/standard-snackbar.component';
import { BoardPageComponent } from './refs-board/board-page/board-page.component';
import { BoardNotfoundComponent } from './refs-board/board-notfound/board-notfound.component';
import { HomeComponent } from './refs-home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptorService } from './refs-utility/refs-auth/authentication-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardUserinfoComponent,
    BoardFooterComponent,
    BoardCardlistComponent,
    BoardButtonsComponent,
    BoardInfosComponent,
    StandardSnackbarComponent,
    BoardPageComponent,
    BoardNotfoundComponent,
    HomeComponent
  ],
  imports: [
    AngularModules,
    FontAwesomeModule,

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
