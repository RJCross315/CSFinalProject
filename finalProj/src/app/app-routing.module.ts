import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrayerBoardComponent } from './pages/prayer-board/prayer-board.component';
import { PrayerRequestComponent } from './pages/prayer-request/prayer-request.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'request', component: PrayerRequestComponent },
  { path: 'board', component: PrayerBoardComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
