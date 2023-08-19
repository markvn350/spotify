import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly  URL = environment.api;

  sendCredentials(email: string, password: string): Observable<any> {
    const body = { email, password }
    
    return this.httpClient.post(this.URL+"/auth/login", body).pipe(
      tap((response : any) =>{
        const {tokenSession, data } = response;
        
          this._cookieService.set("tokensession" , tokenSession, 4, "/")
        
    }))
      
  }
      
  constructor(private httpClient: HttpClient, private _cookieService: CookieService) { }
}
