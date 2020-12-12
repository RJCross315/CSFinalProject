import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PrayerRequestComponent } from './pages/prayer-request/prayer-request.component';
import { PrayerBoardComponent } from './pages/prayer-board/prayer-board.component';
import { firebaseConfig } from './credentials';

import { FormsModule } from '@angular/forms'

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';

//import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrayerRequestComponent,
    PrayerBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
