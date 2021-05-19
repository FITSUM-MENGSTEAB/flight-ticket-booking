import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FlightIntercepterInterceptor implements HttpInterceptor {

  constructor() {}

  intercept (request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    const token: string = localStorage.getItem('access-token');

    if (token) {
        console.log(token);
        request = request.clone({ headers: request.headers.set('Authorization', token) });
         return next.handle(request);
    }

    if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        return next.handle(request);
    }

       request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
          return next.handle(request);

}
}
