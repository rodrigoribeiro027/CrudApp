import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  voltarLogin() {
    this.navCtrl.navigateForward('/');
  }
  cadastrarUsuario() {
    this.navCtrl.navigateForward('/');
  }

  ngOnInit() {
  }

}
