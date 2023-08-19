
import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: "auth/login",
    component: LoginPageComponent,
  },
  {
    path:"**",
    redirectTo: "/auth",
    pathMatch: "full"
  },
];


