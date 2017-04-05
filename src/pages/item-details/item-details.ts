import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';

import { ListPage } from '../list/list';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  items: any;
  edit: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.items = navParams.get('items');
    this.edit = navParams.get('edit');

    if (!this.selectedItem) {
      this.selectedItem = { 
        'codigo' : '',
        'dateAcordo' : new Date(),
        'dataacordocomercial' : '',
        'natureza' : '',
        'comprador' : '',
        'vendedor' : '',
        'energiareferencia' : '',
        'energiaentregue' : '',
        'statusaprovacao' : '',
        'modelo' : '',
        'precobasecontratado' : '',
        'submercado' : '',
        'iniFor' : new Date(),
        'fimFor' : new Date(),
        'iniVig' : new Date(),
        'fimVig' : new Date(),
        'iniciofornecimento' : '',
        'fimfornecimento' : '',
        'iniciovigencia' : '',
        'fimvigencia' : ''
      }
    }
  }

  itemDelete(event, item) {
    if (item.codigo) {
      let confirmAlert = this.alertCtrl.create({
        title: 'Exclusão de contrato',
        message: 'Tem certeza que deseja apagar o contrato? Código: ' + this.selectedItem.codigo,
        buttons: [
          {
            text: 'Não',
            role: 'cancel',
            handler: () => {
            }
          },
          {
            text: 'Sim',
            handler: () => {
              let items = this.removeFromArray(this.items, 'codigo', this.selectedItem.codigo);

              this.navCtrl.push(ListPage, {
                items: items
              });
            }
          }
        ]
      });
      confirmAlert.present();
    } else {
      alert('Nenhum contrato para apagar!');
    }
  }

  itemSave(event, item) {

    if (item.codigo
          && item.dateAcordo
          && item.natureza
          && item.comprador
          && item.vendedor
          && item.energiareferencia
          && item.energiaentregue
          && item.statusaprovacao
          && item.modelo
          && item.precobasecontratado
          && item.submercado
          && item.iniFor
          && item.fimFor
          && item.iniVig
          && item.fimVig) {

        if (!this.edit) {

          item.dataacordoreferencia = item.dateAcordo;
          item.iniciofornecimento = item.iniFor;
          item.fimfornecimento = item.fimFor;
          item.iniciovigencia = item.iniVig;
          item.fimvigencia = item.fimVig;

          this.items.push(item);
          this.navCtrl.push(ListPage, {
            items: this.items
          });

        } else {

          let self = this;

          this.items.forEach(function(part, index, theArray) {
            if (theArray[index].codigo == self.selectedItem.codigo) {
              theArray[index] == self.selectedItem;
            }

            self.items = theArray;
          });
          this.navCtrl.push(ListPage, {
            items: this.items
          });

        }

      } else {
        alert('Preencha todos os dados para continuar!');
      }
  }

  removeFromArray(arr, attr, value){
    var i = arr.length;
    while(i--){
      if( arr[i] 
          && arr[i].hasOwnProperty(attr) 
          && (arguments.length > 2 && arr[i][attr] === value ) ){ 

          arr.splice(i,1);

      }
    }
    return arr;
  }
}
