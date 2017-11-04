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
  msg(){
    let local = this;
    local.cardvar = "Teste ...";
  }
  card(){
    let local = this;
    local.sim.getSimInfo().then(
      (info) => console.log('Sim info: ', info),
      (err) => console.log('Unable to get sim info: ', err)
    );

  }

}
