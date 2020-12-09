import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-prayer-board',
  templateUrl: './prayer-board.component.html',
  styleUrls: ['./prayer-board.component.css']
})
export class PrayerBoardComponent implements OnInit {

  PrayerDatabase : [{
    
  }]
  constructor(private db: AngularFirestore) {
    const dbcollection = this.db.collection('/prayTogether', ref => ref.orderBy('timestamp'))
    dbcollection.valueChanges().subscribe((res: [{ timestamp: Date, message: string, color?: string, }]) => {
      this.PrayerDatabase = res;
    })
  }

  ngOnInit(): void {
  }

}
