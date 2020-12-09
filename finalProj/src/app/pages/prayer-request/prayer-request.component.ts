import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-prayer-request',
  templateUrl: './prayer-request.component.html',
  styleUrls: ['./prayer-request.component.css']
})
export class PrayerRequestComponent implements OnInit {

  // Think about how to determine whether a request or thanksgiving given

  prayer: string;
  moreDetails: string;
  name: string;
  email: string;
  phoneNum: number;
  date = new Date();
  prayerType: string;
  
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

  constructor(private db: AngularFirestore) {}

  addCollection() {
    console.log("clicked");
    console.log(this.prayerType);
    if ( this.prayerType == "request") {
      console.log("request");
      const dbcollection = this.db.collection('/prayer-request', ref => ref.orderBy('date'));
      dbcollection.add({
        request: this.prayer,
        more_info: this.moreDetails,
        name: this.name,
        phone_num: this.phoneNum,
        email: this.email,
        date: this.date,
      })
    }
    if ( this.prayerType == "thanks") {
      console.log("thanks");
      const dbcollection = this.db.collection('/thanksgiving', ref => ref.orderBy('date'));
      dbcollection.add({
        thanks: this.prayer,
        more_info: this.moreDetails,
        name: this.name,
        phone_num: this.phoneNum,
        email: this.email,
        date: this.date,
      })
    }
    
  }

  ngOnInit(): void {}

}
