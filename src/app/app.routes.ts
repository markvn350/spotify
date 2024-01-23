import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { Session1Guard } from '@core/guards/session1.guard';
import { sessionGuardFunctional } from '@core/guards/sessionGuardF';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';


export const routes: Routes = [
 {
  path: '',
  component: HomePageComponent,
  loadChildren:()=> import('./modules/home/home.routes').then(m => m.homeRoutes),
  canActivate: [sessionGuardFunctional],
 },
 {
  path: 'auth',
  loadChildren:()=> import('./modules/auth/auth.routes').then(m => m.authRoutes),
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
