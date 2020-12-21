import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  key: string;

  constructor(public router: Router, public toast: ToastController) { }

  async next(kalit) {
    console.log(this.key);
    if (localStorage.getItem('userpass') == this.key) {
      this.router.navigateByUrl('/main');
      localStorage.setItem('isPerson', 'yes');
      const toast = await this.toast.create({
        message: 'Salom Kundaligingizga hush kelibsiz!',
        duration: 2000
      });
      toast.present();
    } else {
      const toast = await this.toast.create({
        message: 'Siz kiritgan mahfiy kalit noto`gri!',
        duration: 2000
      });
      toast.present();
    }
  }

}
