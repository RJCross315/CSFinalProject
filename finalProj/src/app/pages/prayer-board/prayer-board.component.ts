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
    more_info: string;
    name: string;
    phone_num: number;
    email: string;
    date: Date;
  }]

  constructor(private db: AngularFirestore) {
    const dbcollection = this.db.collection('/pray-request', ref => ref.orderBy('timestamp'))
    dbcollection.valueChanges().subscribe((res: [{
      request: string;
      more_info?: string;
      name?: string;
      phone_num?: number;
      email?: string;
      date: Date;
    }]) => {
      this.FirestoreRec_request = res;
    })
  }

  ngOnInit(): void {
  }

}
