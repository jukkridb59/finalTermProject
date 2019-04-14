import { Injectable } from '@angular/core';
import { Lessor } from './lessor';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class LessorServiceService {

  lessorsRef: AngularFireList<any>;
  lessorRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

    // Create Lessor
    AddLessor(lessor: Lessor) {
      this.lessorsRef.push({
        name: lessor.name,
        email: lessor.email,
        password: lessor.password,
        address: lessor.address,
        sex: lessor.sex,
        age: lessor.age
      });
    }

    // Fetch Single Lessor Object
    GetLessor(id: string) {
      this.lessorRef = this.db.object('lessor-list/' + id);
      return this.lessorRef;
    }

    // Fetch Lessor List
    GetLessorList() {
      this.lessorsRef = this.db.list('lessor-list');
      return this.lessorsRef;
    }

    // Update Lessor Object
    UpdateLessor(lessor: Lessor) {
      this.lessorRef.update({
        name: lessor.name,
        email: lessor.email,
        password: lessor.password,
        address: lessor.address,
        sex: lessor.sex,
        age: lessor.age
      });
    }

    // Delete Lessor Object
    DeleteLessor(id: string) {
      this.lessorRef = this.db.object('lessor-list/' + id);
      this.lessorRef.remove();
    }

}
