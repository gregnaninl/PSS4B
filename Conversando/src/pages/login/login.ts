import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
//importo el provider
import { AuthProvider } from '../../providers/auth/auth';





import { FormGroup} from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { HomePage } from '../home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  splash = true;
  band:number =0;
  //lo agrego para crear el user
  usuario ={ email:'', clave:'' };


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
    console.log('ionViewDidLoad LoginPage');
    setTimeout(() => {
      this.splash = false;
    //  this.tabBarElement.style.display = 'flex';
    }, 4000);
  }

  login()
{
    this.auth.loginUser(this.usuario.email,this.usuario.clave ).then((user) => {
      
      }
    )
     .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: "Se produjo un error al ingresar",
        buttons: ['Aceptar']
      });
      alert.present();
    })
  }

  registrarUsuario(){
    this.navCtrl.push( RegistroPage);

  }

  

}
