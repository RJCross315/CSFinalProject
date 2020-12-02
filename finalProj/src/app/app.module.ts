import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PrayerRequestComponent } from './pages/prayer-request/prayer-request.component';
import { PrayerBoardComponent } from './pages/prayer-board/prayer-board.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrayerRequestComponent,
    PrayerBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
