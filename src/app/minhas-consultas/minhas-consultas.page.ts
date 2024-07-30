import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-minhas-consultas',
  templateUrl: './minhas-consultas.page.html',
  styleUrls: ['./minhas-consultas.page.scss'],
})
export class MinhasConsultasPage implements OnInit {


  ngOnInit() {
  }
  constructor(private navCtrl: NavController) { }
  
  voltarLogin() {
    this.navCtrl.navigateForward('/tabs/tab3');
  }
}
