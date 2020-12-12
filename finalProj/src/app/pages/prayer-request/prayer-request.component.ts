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
  date: Date;
  prayerType: string;

  // Evaluate values to display/hide infomation
  hideContact = true;
  showButton = false;
  hideContactButton = false;

  constructor(private db: AngularFirestore) {}

  addCollection() {
    this.date = new Date();
    if ( this.prayerType == "request") {
      const dbcollection = this.db.collection('/prayer_requests', ref => ref.orderBy('date'));
      dbcollection.add({
        request: this.prayer,
        more_info: this.moreDetails,
        name: this.name,
        phone_num: this.phoneNum,
        email: this.email,
        date: this.date,
      })
      console.log("Request entered");
      window.location.reload();
    }
    if ( this.prayerType == "thanks") {
      const dbcollection = this.db.collection('/thanksgiving', ref => ref.orderBy('date'));
      dbcollection.add({
        thanks: this.prayer,
        more_info: this.moreDetails,
        name: this.name,
        phone_num: this.phoneNum,
        email: this.email,
        date: this.date,
      })
      console.log("Thanks entered");
      window.location.reload();
    }
    else {
      // warning???
      console.log("Tried to addCollection");
    }
    
  }

  showContactQ() {
    this.hideContact = false;
    this.hideContactButton = true;
    // this works but may not be the way that we want to activate the submit button.
    if (this.prayer != "") {
      this.showButton = true;
    }
    else {
      // display alert to fill in prayer
    }
  }

  clickedNo() {
    this.hideContactButton = true;
    if (this.prayer != "") {
      this.showButton = true;
    }
    else {
      // display alert to fill in prayer
    }
    this.name = "anonymous";
    this.email = "NA";
    this.phoneNum = 0;
  }

  ngOnInit(): void { }

}
