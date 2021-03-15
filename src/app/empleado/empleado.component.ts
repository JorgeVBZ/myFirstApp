import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aquí iría un empleado!</p>",
  styleUrls: ['./empleado.component.css']
  //Componente inline
  //styles:["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre="Jorge";
  apellido="Villacastín"
  edad=24;
  //empresa="Purgadores de Condensado S.L";

  /*getEdad(){

    return this.edad;
  }
  */

  habilitacionCuadro=false;
  userRegistered=false;

  getRegistroUsuario(){
    this.userRegistered=true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
