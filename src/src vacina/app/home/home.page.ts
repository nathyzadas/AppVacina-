import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  exibirSobre() {
    this.navCtrl.navigateForward('sobre');
  }

  exibirVacinacao() {
    this.navCtrl.navigateForward('vacinacao');
  }

  exibirOutros() {
    this.navCtrl.navigateForward('outros');
  }

}
