import {  HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

/**
 * Interceptor function
 * @param request 
 * @param next 
 * @returns 
 */


export const authorizationInterceptor = (request: HttpRequest<unknown>, next: HttpHandlerFn) =>{

    const _cookieService = inject(CookieService);

   
        try{
          const token = _cookieService.get("token");
          let newReq = request
          newReq =request.clone(
            {
              setHeaders:  {
                authorization: 'Bearer ' + token,
                CUSTOM_HEADER: " HELLO "
              }
            }
          )
          return next(newReq);
        }catch(error){
          console.log("Ha ocurrido un error: ",error);
          return next(request);
        }


    
}