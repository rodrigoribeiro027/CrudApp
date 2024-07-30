import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-meus-pets',
  templateUrl: './meus-pets.page.html',
  styleUrls: ['./meus-pets.page.scss'],
})
export class MeusPetsPage implements OnInit {


  ngOnInit() {
  }
  constructor(private navCtrl: NavController) { }
  
  voltarHome() {
    this.navCtrl.navigateForward('/tabs/tab3');
  }
}
