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
import { BoardUserinfoComponent } from './refs-board/board-customobjects/board-userinfo/board-userinfo.component';
import { StandardFooterComponent } from './refs-utility/refs-standard/standard-footer/standard-footer.component';
import { BoardCardComponent } from './refs-board/board-customobjects/board-card/board-card.component';
import { BoardButtonsComponent } from './refs-board/board-customobjects/board-buttons/board-buttons.component';
import { BoardInfosComponent } from './refs-board/board-customobjects/board-infos/board-infos.component';
import { StandardSnackbarComponent } from './refs-utility/refs-standard/standard-snackbar/standard-snackbar.component';
import { BoardPageComponent } from './refs-board/board-page/board-page.component';
import { BoardNotfoundComponent } from './refs-utility/refs-notfound/notfound.component';
import { HomeComponent } from './refs-home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptorService } from './refs-utility/refs-auth/authentication-interceptor.service';
import { LoginComponent } from './refs-login/login.component';
import { AdminManagerComponent } from './refs-admin/admin-manager.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StandardSpinnerComponent } from './refs-utility/refs-standard/standard-spinner/standard-spinner.component';
import { AdminHomeComponent } from './refs-admin/admin-home/admin-home.component';
import { AdminLanguageComponent } from './refs-admin/admin-language/admin-language.component';
import { AdminProfileComponent } from './refs-admin/admin-profile/admin-profile.component';
import { StandardUploaderComponent } from './refs-utility/refs-standard/standard-uploader/standard-uploader.component';
import { AdminAlixComponent } from './refs-admin/admin-alix/admin-alix.component';



@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardUserinfoComponent,
    StandardFooterComponent,
    BoardCardComponent,
    BoardButtonsComponent,
    BoardInfosComponent,
    StandardSnackbarComponent,
    BoardPageComponent,
    BoardNotfoundComponent,
    HomeComponent,
    LoginComponent,
    AdminManagerComponent,
    StandardSpinnerComponent,
    AdminHomeComponent,
    AdminLanguageComponent,
    AdminProfileComponent,
    StandardUploaderComponent,
    AdminAlixComponent
  ],
  imports: [
    AngularModules,
    FontAwesomeModule,

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
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
