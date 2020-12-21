import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FormComponent } from './form/form.component';
import { MaqolaService } from './maqola.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  statusMessage: string;
  maqolalar

  constructor(public Router: Router,
    public modal: ModalController,
    public maqolaServ: MaqolaService) {
    this.maqolalar = JSON.parse(localStorage.getItem('maqolalar'));
  }

  chiqish() {
    localStorage.setItem('isPerson', 'no');
    this.Router.navigateByUrl('/home');
  }

  async add() {
    const modal = await this.modal.create({
      component: FormComponent
    });
    return await modal.present();
  }

  ngOnInit() {
    if (!JSON.parse(localStorage.getItem('maqolalar'))) {
      this.statusMessage = "Hozircha hech narsa yo'q"
    } else {
      this.statusMessage = '';
    }
  }

}
