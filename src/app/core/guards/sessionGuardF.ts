import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { CookieService } from "ngx-cookie-service"

/**
 * Session Guard Function
 * @returns 
 * 
 */

export const sessionGuardFunctional = ():boolean=>{
    const _cookieService = inject(CookieService)
    const routes = inject(Router)

    try{
        const token: boolean = _cookieService.check("token");
        console.log(token);
        if(token){
          return true;
        }
        else {  
          routes.navigate(["/", "auth"]);
          return false;
        }
      } catch(err){
        console.log("Ocurrio un Error: " + err);
        return false;
      }
      
}