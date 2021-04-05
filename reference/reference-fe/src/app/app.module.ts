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
import { ContextComponent } from './refs-context/context.component';
import { ContextHeaderComponent } from './refs-context/context-custom/context-header/context-header.component';
import { StandardFooterComponent } from './refs-utility/refs-standard/standard-footer/standard-footer.component';
import { ContextCardComponent } from './refs-context/context-custom/context-card/context-card.component';
import { ContextButtonsComponent } from './refs-context/context-custom/context-buttons/context-buttons.component';
import { ContextInfosComponent } from './refs-context/context-custom/context-infos/context-infos.component';
import { StandardSnackbarComponent } from './refs-utility/refs-standard/standard-snackbar/standard-snackbar.component';
import { BoardNotfoundComponent } from './refs-utility/refs-notfound/notfound.component';
import { HomeComponent } from './refs-home/home.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptorService } from './refs-utility/refs-auth/authentication-interceptor.service';
import { LoginComponent } from './refs-login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StandardSpinnerComponent } from './refs-utility/refs-standard/standard-spinner/standard-spinner.component';
import { StandardUploaderComponent } from './refs-utility/refs-standard/standard-uploader/standard-uploader.component';
import { EditorComponent } from './refs-editor/editor.component';
import { HighFiveColorPaletteModule } from 'hf-color-palette';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EditableComponent } from './refs-context/context-editable/editable.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,

    ContextComponent,

    ContextHeaderComponent,
    ContextCardComponent,
    ContextButtonsComponent,
    ContextInfosComponent,

    StandardFooterComponent,

    StandardSnackbarComponent,
    BoardNotfoundComponent,
    HomeComponent,
    LoginComponent,
    StandardSpinnerComponent,
    StandardUploaderComponent,
    EditorComponent,
    EditableComponent
  ],
  imports: [
    AngularModules,
    FontAwesomeModule,
    HighFiveColorPaletteModule,

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    library: FaIconLibrary,
    translate: TranslateService
  ) {
    library.addIconPacks(fas, far, fab);
    translate.setDefaultLang('en');
  }
}
