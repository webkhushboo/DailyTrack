import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {

  constructor(private firestore: AngularFirestore) { }

  // This allow to add company data to firestore database
  addCampaign(data) {
    return this.firestore.collection('campaigns').add(data);
  }

  // This will retrieve all company data from firestore database
  getCampaignsList(): Observable<any> {
    const dataColl = this.firestore.collection('campaigns').snapshotChanges().pipe(
      map((actions) => actions.map((a: any) => {
        const data: any = a.payload.doc.data();
        const id = a.payload.doc.id;

        return { id, ...data };
      }))
    );

    return dataColl;
  }

  // This allow to update company data using document id in firestore database
  updateCampaigns(id, value): any {
    return this.firestore.collection('campaigns').doc(id).set(value);
  }
}
