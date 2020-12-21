import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  key: string;

  constructor(public router: Router) { }

  save() {
    localStorage.setItem('userpass', this.key);
    this.router.navigateByUrl('home');
  }
  ngOnInit() { }

}
