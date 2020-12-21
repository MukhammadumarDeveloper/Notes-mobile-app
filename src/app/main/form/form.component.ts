import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MaqolaService } from '../maqola.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  sarlavha: string;
  matn: string;
  id: Date;
  maqola
  constructor(public modal: ModalController,
    public maqolaServ: MaqolaService,
    public router: Router,
    public formBuilder: FormBuilder) {
      this.maqola = this.formBuilder.group({
        sarlavha: '',
        matn: ''
      })
  }

  onSubmit(maqola) {
    this.maqolaServ.maqolaqosh(maqola);
    this.maqolaServ.vaqtincha = JSON.parse(localStorage.getItem('maqolalar'));
    this.router.navigateByUrl('main');
    // console.log(maqola);
  }
  close() {
    this.modal.dismiss();
  }

  ngOnInit() { }

}
