import { EditorComponent } from './refs-editor/editor.component';
import { LoginComponent } from './refs-login/login.component';
import { RoutingUrl } from './refs-utility/refs-routing/routing-url';
import { BoardNotfoundComponent } from './refs-utility/refs-notfound/notfound.component';
import { ContextComponent } from './refs-context/context.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuardService as LoginGuard } from './refs-utility/refs-auth/guard/login-guard.service';
import { AuthenticationGuardService as AuthGuard } from './refs-utility/refs-auth/guard/auth-guard.service';

const routes: Routes = [
  { path: RoutingUrl.HOME, redirectTo: RoutingUrl.LOGIN_PAGE, pathMatch: 'full' },
  { path: RoutingUrl.LOGIN_PAGE, component: LoginComponent, canActivate: [LoginGuard] },
  /* { path: RoutingUrl.ADMIN_MANAGER, component: AdminManagerComponent, canActivate: [AuthGuard] }, */
  { path: RoutingUrl.ALIX_EDITOR, component: EditorComponent, canActivate: [AuthGuard] },

  { path: RoutingUrl.NOTFOUND, component: BoardNotfoundComponent },

  { path: ':alix', children: [
    { path: RoutingUrl.BOARD, component: ContextComponent },
    { path: ':page', component: ContextComponent },
  ]},

  { path: RoutingUrl.EVERYTHING, component: BoardNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
