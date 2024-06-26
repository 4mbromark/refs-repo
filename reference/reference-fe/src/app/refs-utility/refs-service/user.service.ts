import { RoutingService } from './routing.service';
import { AuthenticationService } from '../refs-auth/authentication.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MasterUser } from '../refs-object/database/master/MasterUser';
import { RestUrl } from '../refs-rest/rest-url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: BehaviorSubject<MasterUser> = new BehaviorSubject<MasterUser>(null);
  private userPropic: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService,
    private routingService: RoutingService
  ) { }

  login(uids: string, pwds: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post(RestUrl.USER_AUTH, { uid: uids, pwd: pwds }, { responseType: 'json' }).subscribe(
        (user: MasterUser) => {
          this.authService.authenticate(user.token);
          this.routingService.reload();
          resolve();
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

  logout(): void {
    this.authService.invalidate();
    this.routingService.reload();
  }

  setUser(user: MasterUser): void {
    this.user.next(user);
    this.loadUserPropic();
  }

  getUser(): Observable<MasterUser> {
    return this.user.asObservable();
  }

  getUserValue(): MasterUser {
    return this.user.value;
  }

  getUserPropic(): Observable<string> {
    return this.userPropic.asObservable();
  }

  loadUserPropic(): void {
    this.http.get(RestUrl.USER_GETPROPIC + this.user.value._id, { responseType: 'text' }).subscribe(
      (propic: string) => {
        this.userPropic.next(propic);
      },
      (error: HttpErrorResponse) => { }
    );
  }

  saveUser(usr: MasterUser): void {
    this.http.post(RestUrl.USER_SAVE, { user: usr }, { responseType: 'json' }).subscribe(
      (user: MasterUser) => {
        this.user.next(user);
        // this.routingService.reload();
      },
      (error: HttpErrorResponse) => { }
    );
  }
}
