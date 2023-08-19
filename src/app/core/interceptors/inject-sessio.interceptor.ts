import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectSessioInterceptor implements HttpInterceptor {

  constructor(private _cookieService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try{
      const token = this._cookieService.get("token");
      let newReq = request
      newReq =request.clone(
        {
          setHeaders:  {
            authorization: 'Bearer ' + token
          }
        }
      )
      return next.handle(newReq);
    }catch(error){
      console.log("Ha ocurrido un error: ",error);
      return next.handle(request);
    }
    
  }
}
