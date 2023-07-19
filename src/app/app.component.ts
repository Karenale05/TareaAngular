import { Component } from '@angular/core';
import { Producto } from './interfaces/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lista:Producto[] = [
    {
      nombre: "Pure",
      costo: "$60"
    },
    {
      nombre: "Tomate",
      costo:"$50"

    },
    {
      nombre: "Carne",
      costo:"$1500"

    },{
      nombre: "Yerba",
      costo:"$500"

    },
  ]

  listaVisible:boolean = true;

  textoBoton:string = "Ocultar"

  botonPresionado() {
    this.listaVisible = !this.listaVisible ;

    if(this.listaVisible == false ){
    this.textoBoton = "Mostrar lista"
    }
    else{
      this.textoBoton = "Ocultar"
    }
  }

}
