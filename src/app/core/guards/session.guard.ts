import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();
  }
  checkCookieSession(): boolean { 
    try{
      const token: boolean = this._cookieService.check("token");
      console.log(token);
      if(token){
        return true;
      }
      else {  
        this.routes.navigate(["/", "auth"]);
        return false;
      }
    } catch(err){
      console.log("Ocurrio un Error: " + err);
      return false;
    }
    
    

  }

  constructor(private _cookieService: CookieService, private routes:Router){}
}
