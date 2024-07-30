import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string | undefined;
  password: string | undefined;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.navCtrl.navigateForward('/tabs/tab1');
  }
  cadastrarUsuario() {
    this.navCtrl.navigateForward('/cadastroUsuario');
  }

  forgotPassword() {
    console.log('Esqueci minha senha');
  }
}
