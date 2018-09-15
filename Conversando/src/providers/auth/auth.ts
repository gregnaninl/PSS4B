//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//agrego para autenticar
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private afAuth: AngularFireAuth ) {
    console.log('Hello AuthProvider Provider');
  }

  // Login de usuario
 loginUser(email:string, clave:string){
  return this.afAuth.auth.signInWithEmailAndPassword(email, clave)
    .then(user=>Promise.resolve(user))
    .catch(err=>Promise.reject(err))
}



  // Registro de usuario
  registrarUsuario(email:string, clave:string){
    return this.afAuth.auth.createUserWithEmailAndPassword( email, clave)
    .then((res)=>{
     // El usuario se ha creado correctamente.
    })
    .catch(err=>Promise.reject(err))
 }


  // Devuelve la session
  get Session(){
  return this.afAuth.authState;
 }

  // Logout de usuario
  logout(){
    this.afAuth.auth.signOut().then(()=>{
      // hemos salido
    })
  }


  //log google
  loginGoogle(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    
  }

}

