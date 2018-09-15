import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
//importo el provider
import { AuthProvider } from '../../providers/auth/auth';

import { FormGroup} from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';



/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  usuario ={ email:'', clave:'' };
  band:number =0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public auth : AuthProvider) {
      this.band =0;
  }
    
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  async Cancelar()
  {
    this.navCtrl.setRoot(LoginPage);
  }
  
 //registrar usuario
 registrar(){
  //this.navCtrl.push( RegistrarPage);

  this.auth.registrarUsuario(this.usuario.email,this.usuario.clave)
  .then((user) => {
    // El usuario se ha creado correctamente
    let alert = this.alertCtrl.create({
      title: 'Login',
      subTitle: 'El usuario se ha creado correctamente',
      buttons: ['Aceptar']
    });
    alert.present();
  })
  .catch(err=>{
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Fallo la generacion de usuario',
      buttons: ['Aceptar']
    });
    alert.present();
  })

}


}
