import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import WaterLevel from '../../model/waterlevel';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFireDatabase) {
    this.waterlevelRef = db.list(this.dbPath);
  }

  private dbPath = '/test';

  waterlevelRef: AngularFireList<WaterLevel>;

  getAll(): AngularFireList<WaterLevel> {
    return this.waterlevelRef;
  }
}
