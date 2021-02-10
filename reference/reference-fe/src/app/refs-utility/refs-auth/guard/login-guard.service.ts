import { Injectable } from '@angular/core';
import { RoutingUrl } from '../../refs-routing/routing-url';
import { RoutingService } from '../../refs-service/routing.service';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor(
    private authService: AuthenticationService,
    private routingService: RoutingService
  ) { }

  canActivate(): any {
    return new Promise((resolve) => {
      this.authService.isAuthenticated().then(() => {
        this.routingService.goTo(RoutingUrl.ADMIN_MANAGER);
        resolve(false);
      }).catch(() => {
        resolve(true);
      });
    });
  }
}
