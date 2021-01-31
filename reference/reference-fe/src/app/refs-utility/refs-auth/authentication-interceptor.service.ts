import { StorageTag } from './../refs-enum/storage-tag';
import { StorageService } from './../refs-service/storage.service';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptorService implements HttpInterceptor {

  constructor(
    private storageService: StorageService
  ) {}

  intercept(req: HttpRequest<string>, next: HttpHandler) {

    const token: string = this.storageService.get(StorageTag.STORAGE_TOKEN);

    req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const err = error.error.message || error.statusText;
          return throwError(error);
        }
      )
    );
  }
}
