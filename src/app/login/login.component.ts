import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  template: `
    <button (click)="signInWithGoogle()">Sign in with Google</button>
  `,
})
export class LoginComponent {
  constructor(private afAuth: AngularFireAuth) {}

  signInWithGoogle() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        console.log('User signed in:', result.user);
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
      });
  }
}
