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

  textoRegistro = "No hay nadie registrado";

  getRegistroUsuario(){
    this.userRegistered=false;
  }

  setUsuarioRegistrado(event:Event){
    //alert("El usuario se acaba de registrar");
    //this.textoRegistro="El usuario se acaba de registrar";
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoRegistro = "El usuario está registrado";
    }
    else{
      this.textoRegistro = "No hay nadie registrado";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


}
