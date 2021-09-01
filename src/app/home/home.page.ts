import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import WaterLevel from '../model/waterlevel';
import { FirestoreService } from '../services/data/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  progress :any;
  level: any;
  distence:WaterLevel[];
  currentDistence: WaterLevel;
  currentIndex: -1;
  constructor(private firestoreService:FirestoreService) { }
  progressBar = document.querySelector('.progress-bar');
  intervalId;

  ngOnInit() {
    const getDownloadProgress = () => {
      console.log('getDownload', this);
      if (this.distence.length <= 99) {
        console.log('inside if', this.distence.length);
        this.distence.length = this.distence.length + 1;
      }
      else {
        clearInterval(this.intervalId);
      }
    }
    this.intervalId = setInterval(getDownloadProgress, 10);
    this.getWaterLevel();
  }
  getWaterLevel():void{
    console.log('getlevel', this);
      this.firestoreService.getAll().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(test => {
        this.distence = test;
        console.log('getlevel', this);
      });
    
  }
  refreshList(): void {
    this.currentDistence = undefined;
    this.currentIndex = -1;
    this.getWaterLevel();
  }
  
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
