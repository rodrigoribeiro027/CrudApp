import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isModalOpen = false;

  constructor(private toastController: ToastController) {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return ` Maximo de caracteres ${maxLength - inputLength}`;
  }

  CadastroPet(isOpen: boolean) {
    this.isModalOpen = isOpen;
    if (!isOpen) {
      this.presentToast('Pet cadastrado com sucesso!');
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
