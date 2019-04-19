import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LessorService {

  constructor(private firestore: AngularFirestore) { }

  createLessor(record) {
    return this.firestore.collection('lessorList').add(record);
  }

  readLessor() {
    return this.firestore.collection('lessorList').snapshotChanges();
  }

  updateLessor(recordID, record) {
    this.firestore.doc('lessorList/' + recordID).update(record);
  }

  deleteLessor(recordID) {
    this.firestore.doc('lessorList/' + recordID).delete();
  }
}
