import { Component, OnInit , OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf]
})
export class LoginPageComponent implements OnInit, OnDestroy {
  formLogin: FormGroup = new FormGroup({});
  errorSession: boolean = false;
  observer1$: Subscription = new Subscription();
  observer$: Array<Subscription> =[];

  constructor(private _authService: AuthService, private _cookieService: CookieService, private routes: Router){}

  sendLogin(){
    const {email, password} = this.formLogin.value;
    console.log(email, password);
    this.observer1$ = this._authService.sendCredentials(email, password).subscribe(res =>{
      const {tokenSession, data } = res;
      console.log(tokenSession);
      this._cookieService.set("token", tokenSession, 4, "/" )
      setTimeout(()=>{
        this.routes.navigate(["/", "tracks"]);  
        console.log("inicio de sesion correcto");
      }, 1500);
      
    },
    err=>{
      this.errorSession =true;
      console.log("error passwor");
    }
    );
  }
  ngOnInit(): void {
    
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.email, 
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ])
    });
    this.observer$= [this.observer1$];
  }

  ngOnDestroy(): void {
    this.observer$.forEach(sub =>  sub.unsubscribe()
    );;
  }
}
