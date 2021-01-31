import { HomeComponent } from './refs-home/home.component';
import { RoutingUrl } from './refs-utility/refs-routing/routing-url';
import { BoardNotfoundComponent } from './refs-board/board-notfound/board-notfound.component';
import { BoardComponent } from './refs-board/board.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardPageComponent } from './refs-board/board-page/board-page.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: RoutingUrl.LOGIN_PAGE, redirectTo: '', pathMatch: 'full' },
  { path: '404', component: BoardNotfoundComponent },
  { path: ':alix', children: [
    { path: '', component: BoardComponent },
    { path: ':page', component: BoardPageComponent },
  ]},
  { path: '**', component: BoardNotfoundComponent },

  /*{ path: 'clsupproject', redirectTo: '4mbromark', pathMatch: 'full' },
  { path: 'pholayider', redirectTo: '4mbromark', pathMatch: 'full' },
  { path: 'char.snap', redirectTo: '4mbromark', pathMatch: 'full' },
  { path: 'eraclea.in', redirectTo: '4mbromark', pathMatch: 'full' },
  { path: 'bellowsgraphy', redirectTo: '4mbromark', pathMatch: 'full' },*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
