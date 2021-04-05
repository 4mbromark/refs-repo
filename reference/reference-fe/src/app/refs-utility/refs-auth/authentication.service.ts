import { MasterUser } from './../refs-object/database/master/MasterUser';
import { StorageTag } from './../refs-enum/storage-tag';
import { StorageService } from '../refs-service/storage.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RestUrl } from '../refs-rest/rest-url';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  isAuthenticated(): Promise<MasterUser> {
    const token = this.storageService.get(StorageTag.STORAGE_TOKEN);
    return new Promise((resolve, reject) => {
      if (!token) {
        reject();
        return;
      }
      this.http.post(RestUrl.USER_VERIFY, { tk: token }, { responseType: 'json' }).subscribe(
        (user: MasterUser) => {
          resolve(user);
        },
        (error: HttpErrorResponse) => {
          this.invalidate();
          reject();
        }
      );
    });
  }

  authenticate(token: string): void {
    this.storageService.set(StorageTag.STORAGE_TOKEN, token);
  }

  invalidate(): void {
    this.storageService.remove(StorageTag.STORAGE_TOKEN);
  }
}
