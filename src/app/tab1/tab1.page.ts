import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  isModalOpen = false;
  
  constructor(private toastController: ToastController) {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  agendarConsulta(isOpen: boolean) {
    this.isModalOpen = isOpen;
    if (!isOpen) {
      this.presentToast('Consulta agendada com sucesso!');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
