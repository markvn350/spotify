
import { Routes } from '@angular/router';
import { getCurrentUser } from '@core/utils/getCurrentUser';


export const homeRoutes: Routes = [
 {
  path:"tracks",
  resolve: {
    currentUser: getCurrentUser
  },
  loadChildren: ()=> import( "@modules/tracks/tracks.routes").then(m => m.tracksRoutes)
 },
 {
  path:"favorites",
  loadChildren: ()=> import( "@modules/favorites/favorites.routes").then(m => m.favoriteRoutes)
 },
 {
  path:"history",
  loadChildren: ()=> import( "@modules/history/history.routes").then(m => m.historyRoutes)
 },
 
 { 
  path:"",
  redirectTo: "/tracks",
  pathMatch: "full"
 },
 
];


