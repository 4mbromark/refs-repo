import { BrowserModule } from '@angular/platform-browser';
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
import { BoardManagerComponent } from './refs-board/board-manager/board-manager.component';
import { BoardUserinfoComponent } from './refs-board/board-userinfo/board-userinfo.component';
import { BoardFooterComponent } from './refs-board/board-footer/board-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardManagerComponent,
    BoardUserinfoComponent,
    BoardFooterComponent
  ],
  imports: [
    AngularModules,
    FontAwesomeModule,

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
