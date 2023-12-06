import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  constructor(private navCtrl: NavController ) { }

  ngOnInit() {
  }

    voltar() {
      this.navCtrl.navigateForward('home');
    }
  }


