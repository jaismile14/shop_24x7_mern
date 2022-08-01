import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = window.sessionStorage.getItem("access-token");

    if (accessToken) {
      const clonedRequest = request.clone({
        setHeaders: {
          authorization: accessToken
        }
      });
      return next.handle(clonedRequest);;
    }
    return next.handle(request);
  }
}
