import { Component, Injectable  } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
@Injectable()
export class Order {

    public myIconCodigo : string = "md-arrow-dropdown-circle";
    public myIconNatureza : string = "md-arrow-dropdown-circle";
    public myIconComprador : string = "md-arrow-dropdown-circle";
    public myIconVendedor : string = "md-arrow-dropdown-circle";
    public myIconModelo : string = "md-arrow-dropdown-circle";
    public myIconSubmercado : string = "md-arrow-dropdown-circle";

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    codigoSort(items) {
    if (this.myIconCodigo === "md-arrow-dropdown-circle") {
      items.sort(this.compareCodigoDesc);
      this.myIconCodigo = "md-arrow-dropleft-circle";
    } else if (this.myIconCodigo === "md-arrow-dropleft-circle") {
      items.sort(this.compareCodigoAsc);
      this.myIconCodigo = "md-arrow-dropdown-circle";
    }

    return items;
  }

  naturezaSort(items) {
    if (this.myIconNatureza === "md-arrow-dropdown-circle") {
      items.sort(this.compareNaturezaDesc);
      this.myIconNatureza = "md-arrow-dropleft-circle";
    } else if (this.myIconNatureza === "md-arrow-dropleft-circle") {
      items.sort(this.compareNaturezaAsc);
      this.myIconNatureza = "md-arrow-dropdown-circle";
    }

    return items;
  }

  compradorSort(items) {
    if (this.myIconComprador === "md-arrow-dropdown-circle") {
      items.sort(this.compareCompradorDesc);
      this.myIconComprador = "md-arrow-dropleft-circle";
    } else if (this.myIconComprador === "md-arrow-dropleft-circle") {
      items.sort(this.compareCompradorAsc);
      this.myIconComprador = "md-arrow-dropdown-circle";
    }

    return items;
  }

  vendedorSort(items) {
    if (this.myIconVendedor === "md-arrow-dropdown-circle") {
      items.sort(this.compareVendedorDesc);
      this.myIconVendedor = "md-arrow-dropleft-circle";
    } else if (this.myIconVendedor === "md-arrow-dropleft-circle") {
      items.sort(this.compareVendedorAsc);
      this.myIconVendedor = "md-arrow-dropdown-circle";
    }

    return items;
  }

  modeloSort(items) {
    if (this.myIconModelo === "md-arrow-dropdown-circle") {
      items.sort(this.compareModeloDesc);
      this.myIconModelo = "md-arrow-dropleft-circle";
    } else if (this.myIconModelo === "md-arrow-dropleft-circle") {
      items.sort(this.compareModeloAsc);
      this.myIconModelo = "md-arrow-dropdown-circle";
    }

    return items;
  }

  submercadoSort(items) {
    if (this.myIconSubmercado === "md-arrow-dropdown-circle") {
      items.sort(this.compareSubmercadoDesc);
      this.myIconSubmercado = "md-arrow-dropleft-circle";
    } else if (this.myIconSubmercado === "md-arrow-dropleft-circle") {
      items.sort(this.compareSubmercadoAsc);
      this.myIconSubmercado = "md-arrow-dropdown-circle";
    }

    return items;
  }

  compareCodigoAsc(a, b) {
    let codA = a.codigo.replace(/[/]/gi, "")
    let codB = b.codigo.replace(/[/]/gi, "")
    if (codA < codB)
      return -1;
    if (codA > codB)
      return 1;
    return 0;
  }

  compareCodigoDesc(a, b) {
    let codA = a.codigo.replace(/[/]/gi, "")
    let codB = b.codigo.replace(/[/]/gi, "")
    if (codA < codB)
      return 1;
    if (codA > codB)
      return -1;
    return 0;
  }

  compareNaturezaAsc(a, b) {
    let naturezaA = a.natureza
    let naturezaB = b.natureza
    if (naturezaA < naturezaB)
      return -1;
    if (naturezaA > naturezaB)
      return 1;
    return 0;
  }

  compareNaturezaDesc(a, b) {
    let naturezaA = a.natureza
    let naturezaB = b.natureza
    if (naturezaA < naturezaB)
      return 1;
    if (naturezaA > naturezaB)
      return -1;
    return 0;
  }

  compareCompradorAsc(a, b) {
    let compradorA = a.comprador
    let compradorB = b.comprador
    if (compradorA < compradorB)
      return -1;
    if (compradorA > compradorB)
      return 1;
    return 0;
  }

  compareCompradorDesc(a, b) {
    let compradorA = a.comprador
    let compradorB = b.comprador
    if (compradorA < compradorB)
      return 1;
    if (compradorA > compradorB)
      return -1;
    return 0;
  }

  compareVendedorAsc(a, b) {
    let vendedorA = a.vendedor
    let vendedorB = b.vendedor
    if (vendedorA < vendedorB)
      return -1;
    if (vendedorA > vendedorB)
      return 1;
    return 0;
  }

  compareVendedorDesc(a, b) {
    let vendedorA = a.vendedor
    let vendedorB = b.vendedor
    if (vendedorA < vendedorB)
      return 1;
    if (vendedorA > vendedorB)
      return -1;
    return 0;
  }

  compareModeloAsc(a, b) {
    let modeloA = a.modelo
    let modeloB = b.modelo
    if (modeloA < modeloB)
      return -1;
    if (modeloA > modeloB)
      return 1;
    return 0;
  }

  compareModeloDesc(a, b) {
    let modeloA = a.modelo
    let modeloB = b.modelo
    if (modeloA < modeloB)
      return 1;
    if (modeloA > modeloB)
      return -1;
    return 0;
  }

  compareSubmercadoAsc(a, b) {
    let submercadoA = a.submercado
    let submercadoB = b.submercado
    if (submercadoA < submercadoB)
      return -1;
    if (submercadoA > submercadoB)
      return 1;
    return 0;
  }

  compareSubmercadoDesc(a, b) {
    let submercadoA = a.submercado
    let submercadoB = b.submercado
    if (submercadoA < submercadoB)
      return 1;
    if (submercadoA > submercadoB)
      return -1;
    return 0;
  }
}