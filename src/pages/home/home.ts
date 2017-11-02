import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Sim } from '@ionic-native/sim';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public cardvar :any; 
  constructor(private sim: Sim,public navCtrl: NavController) {

  }

  card(){
    let local = this;
    this.sim.getSimInfo().then(
      (info) => {local.cardvar = info}
     
    );

    this.sim.hasReadPermission().then(
      (info) => local.cardvar = info
    );

    this.sim.requestReadPermission().then(
      () => console.log('Permission granted'),
      () => console.log('Permission denied')
    );
  }

}
