import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery List";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceProvider, public InputDialogService: InputDialogServiceProvider) {

  }

  loadItems() {
    return this.dataService.getItems();
  }

  removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item: ' + item.name + ' at index: ' + String(index),
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index)
  }

  addItem() {
    console.log("Adding Item");
    this.InputDialogService.showPrompt();
  }
  
  editItem(item, index) {
    console.log("Edit Item - ", item, index);
    const toast = this.toastCtrl.create({ /*toast creates a floating message bar*/
      message: 'Editing Item: ' + item.name + ' at index: ' + String(index),
      duration: 3000
    });
    toast.present();
    this.InputDialogService.showPrompt(item, index)
  }

}
