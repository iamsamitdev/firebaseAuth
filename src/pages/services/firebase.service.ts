import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable()
export class FirebaseService {

    private snapshotChangesSubscription: any;
    constructor(public afs: AngularFirestore) { }

    getTasks() {
        return new Promise<any>((resolve, reject) => {
            let currentUser = firebase.auth().currentUser;
            this.snapshotChangesSubscription = this.afs.collection('people').doc(currentUser.uid).collection('tasks').snapshotChanges()
                .subscribe(snapshots => {
                    resolve(snapshots);
                })
        });
    }

    unsubscribeOnLogOut() {
        //remember to unsubscribe from the snapshotChanges
        // debugger;
        this.snapshotChangesSubscription.unsubscribe();
    }

}