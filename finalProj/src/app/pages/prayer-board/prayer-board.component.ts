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

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    const dbcollection_request = this.db.collection('/prayer_requests', ref => ref.orderBy('date'))
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

    const dbcollection_thanks = this.db.collection('/thanksgiving', ref => ref.orderBy('date'))
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
