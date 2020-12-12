import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-prayer-board',
  templateUrl: './prayer-board.component.html',
  styleUrls: ['./prayer-board.component.css']
})
export class PrayerBoardComponent implements OnInit {

  FirestoreRec_request: [{
    request: string;
    more_info?: string;
    name?: string;
    phone_num?: number;
    email?: string;
    date: Date;
  }]

  FirestoreRec_thanks: [{
    thanks: string;
    more_info?: string;
    name?: string;
    phone_num?: number;
    email?: string;
    date: Date;
  }]

  date = new Date();
  weekago: Date;
  displayDet = false;

  constructor(private db: AngularFirestore) { 
    // https://stackoverflow.com/questions/5741632/javascript-date-7-days
    const week = this.date.setDate(this.date.getDate() - 7);
    this.weekago = new Date(week);
  }

  ngOnInit(): void {
    // Observable of collection and filters for prayers for that week.

    const dbcollection_request = this.db.collection('/prayer_requests', ref => ref.orderBy('date').startAt(this.weekago))
    dbcollection_request.valueChanges().subscribe((res: [{
      request: string;
      more_info?: string;
      name?: string;
      phone_num?: number;
      email?: string;
      date: Date;
    }]) => {
      this.FirestoreRec_request = res;
    })

    const dbcollection_thanks = this.db.collection('/thanksgiving', ref => ref.orderBy('date').startAt(this.weekago))
    dbcollection_thanks.valueChanges().subscribe((res: [{
      thanks: string;
      more_info?: string;
      name?: string;
      phone_num?: number;
      email?: string;
      date: Date;
    }]) => {
      this.FirestoreRec_thanks = res;
    })
  }
}
