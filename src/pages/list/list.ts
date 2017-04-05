import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { Order } from './order';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: any;
  filtro: boolean = false;
  myIconCodigo: any;
  myIconNatureza: any;
  myIconComprador: any;
  myIconVendedor: any;
  myIconModelo: any;
  myIconSubmercado: any;

  todosContratos: any;

  order: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    let itemsDetail = navParams.get('items');

    this.order = new Order(navCtrl, navParams);
    this.myIconCodigo = this.order.myIconCodigo;
    this.myIconNatureza = this.order.myIconNatureza;
    this.myIconComprador = this.order.myIconComprador;
    this.myIconVendedor = this.order.myIconVendedor;
    this.myIconModelo = this.order.myIconModelo;
    this.myIconSubmercado = this.order.myIconSubmercado;

    if (itemsDetail == null || itemsDetail == 'undefined') {
      this.http.get('https://api.myjson.com/bins/n25id').map(res => res.json()).subscribe(data => {

            let array = data.contracts;
            array = this.validatePropertyArray(array);
            this.items = array;
            this.todosContratos = array;
        });
    } else {
      this.items = itemsDetail;
      this.todosContratos = itemsDetail;
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item,
      items: this.items,
      edit: true
    });
  }

  itemNew(event) {
    this.navCtrl.push(ItemDetailsPage, {
      items: this.items
    });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();
    if (this.items != null && this.items != 'undefined') {
      this.items = this.todosContratos;

      // set val to the value of the searchbar
      let val = ev.target.value;

      // if the value is an empty string don't filter the items

      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => this.checkValue(item, val));
      }
    }
  }

  checkValue(item, val) {
    let retorno = false;
    for (var key in item) {

      let objValue = item[key].toLowerCase()
      let value = val.toLowerCase()
      if (objValue.indexOf(value) > -1) {
        retorno = true;
        break;
      }
    }
    return retorno;
  }

  validatePropertyArray(array) {
    for(let i = 0; i < array.length; i++) {

        for (var property in array[i]) {
          if (array[i].hasOwnProperty(property)) {
              var newKey = property.toLowerCase()
              newKey = newKey.replace(/[á|ã|â|à]/gi, "a")
              newKey = newKey.replace(/[é|ê|è]/gi, "e")
              newKey = newKey.replace(/[í|ì|î]/gi, "i")
              newKey = newKey.replace(/[õ|ò|ó|ô]/gi, "o")
              newKey = newKey.replace(/[ú|ù|û]/gi, "u")
              newKey = newKey.replace(/[ç]/gi, "c")
              newKey = newKey.replace(/[ñ]/gi, "n")
              newKey = newKey.replace(/[á|ã|â]/gi, "a")
              //retira espaços em branco
              newKey = newKey.replace(/ /gi, "")

              if (newKey !== property) {
                  var temp = array[i][property];
                  delete array[i][property];
                  array[i][newKey] = temp;
              }
          }
      }

      let date = this.transformDateComercial(array[i].dataacordocomercial);
      let iniFor = this.transformMesAno(array[i].iniciofornecimento);
      let fimFor = this.transformMesAno(array[i].fimfornecimento);
      let iniVig = this.transformMesAno(array[i].iniciovigencia);
      let fimVig = this.transformMesAno(array[i].fimvigencia);

      array[i].dateAcordo = date.toISOString();
      array[i].iniFor = iniFor.toISOString();
      array[i].fimFor = fimFor.toISOString();
      array[i].iniVig = iniVig.toISOString();
      array[i].fimVig = fimVig.toISOString();
    }

    return array;
  }

  transformDateComercial(datepar){
     var dateParts = datepar.split("-");
     var date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
     return date;
  }

  transformMesAno(datepar){
     var dateParts = datepar.split("/");

     var myMonth = dateParts[0];
     var myDay = 1;
     var myYear = dateParts[1];
     var combineDatestr = myDay + "-" + myMonth + "-" + myYear;

     var date = this.parseDate(combineDatestr);
     date.toLocaleDateString("pt-BR");
     return date;
  }

  parseDate(input) {
    var map = {jan: 1, fev: 2, mar: 3, abr: 4, mai: 5, jun: 6,
                jul: 7, ago: 8, set: 9, out: 10, nov: 11, dez: 12};
    input = input.split(/[-\/]/);
    return new Date(input[2], (map[input[1].toLowerCase()] || input[1]) - 1, input[0]);
  }

  codigoSort(event) {
    this.items = this.order.codigoSort(this.items);
    this.myIconCodigo = this.order.myIconCodigo;
  }

  naturezaSort(event) {
    this.items = this.order.naturezaSort(this.items);
    this.myIconNatureza = this.order.myIconNatureza;
  }

  compradorSort(event) {
    this.items = this.order.compradorSort(this.items);
    this.myIconComprador = this.order.myIconComprador;
  }

  vendedorSort(event) {
    this.items = this.order.vendedorSort(this.items);
    this.myIconVendedor = this.order.myIconVendedor;
  }

  modeloSort(event) {
    this.items = this.order.modeloSort(this.items);
    this.myIconModelo = this.order.myIconModelo;
  }

  submercadoSort(event) {
    this.items = this.order.submercadoSort(this.items);
    this.myIconSubmercado = this.order.myIconSubmercado;
  }
}
