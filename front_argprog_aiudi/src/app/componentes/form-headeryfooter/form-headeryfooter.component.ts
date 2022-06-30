import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';
import { HeaderyfooterService } from 'src/app/service/headeryfooter.service';
import { headeryfooterModel } from 'src/app/model/headeryfooter.model';

@Component({
  selector: 'app-form-headeryfooter',
  templateUrl: './form-headeryfooter.component.html',
  styleUrls: ['./form-headeryfooter.component.css']
})
export class FormHeaderyfooterComponent implements OnInit {

  //Ojo, debo respetar los nombres de las variables creadas en el backend
  editarFormularioHyF = new FormGroup({
    idHeaderFooter: new FormControl(''),
    imagenHeaderFooter: new FormControl(''),
    nombreHeaderFooter: new FormControl(''),
    fechaHeaderFooter: new FormControl(''),
    ciudadHeaderFooter: new FormControl(''),
    provinciaHeaderFooter: new FormControl(''),
    paisHeaderFooter: new FormControl(''),
    imagenBotonEditar: new FormControl(''),
    imagenBotonCerrar: new FormControl(''),
    imagenBotonEliminar: new FormControl(''),
    imagenBanner: new FormControl('')
    });

  constructor(private router: Router, private activerouter: ActivatedRoute, public alertas: AlertasService, public hyfService: HeaderyfooterService) { }

  variable: any;

  ngOnInit(): void {

    let idHyFVariable = this.activerouter.snapshot.paramMap.get('id');

    console.log('Y ahora imprimo la id de HyF desde el componente form-headeryfooter: ')
    console.log(idHyFVariable);

    this.hyfService.getHeaderFooter().subscribe(data => {
      this.variable = data;

      console.log('Imprimo hyf desde el formulario: ');
      console.log(this.variable);
      console.log('Edito el formulario');

      this.editarFormularioHyF.setValue({
        'idHeaderFooter': this.variable.idHeaderFooter, //Tengo que mirar como son los nombres en el console.log de experienciaLaboral que coloqué anteriormente o como nombré cada variable en el backend
        'imagenHeaderFooter': this.variable.imagenHeaderFooter,
        'nombreHeaderFooter': this.variable.nombreHeaderFooter,
        'fechaHeaderFooter': this.variable.fechaHeaderFooter,
        'ciudadHeaderFooter': this.variable.ciudadHeaderFooter,
        'provinciaHeaderFooter': this.variable.provinciaHeaderFooter,
        'paisHeaderFooter': this.variable.paisHeaderFooter,
        'imagenBotonEditar': this.variable.imagenBotonEditar,
        'imagenBotonCerrar': this.variable.imagenBotonCerrar,
        'imagenBotonEliminar': this.variable.imagenBotonEliminar,
        'imagenBanner': this.variable.imagenBanner 
      });

      console.log('Imprimo los valores editarFormularioHyF: ');
      console.log(this.editarFormularioHyF.value);

    });

  }

  funcionVolverHome(){   
    this.router.navigate(['/home']);    
  }

  envioDeFormularioHyF(form: headeryfooterModel){

    console.log('Imprimo el form desde la funcion envioDeFormularioHyF');
    console.log(form);

    console.log('Imprimo cada una de las variables del form');

    form.idHeaderFooter = this.variable.idHeaderFooter; //Variable variable creada después del constructor

    console.log(form.idHeaderFooter); //Ojo, los nombres son los del MODELO !!!
    console.log(form.imagenHeaderFooter);
    console.log(form.nombreHeaderFooter);
    console.log(form.fechaHeaderFooter);
    console.log(form.ciudadHeaderFooter);
    console.log(form.provinciaHeaderFooter);
    console.log(form.paisHeaderFooter);
    console.log(form.imagenBotonEditar);
    console.log(form.imagenBotonCerrar);
    console.log(form.imagenBotonEliminar);
    console.log(form.imagenBanner);

    console.log('VUELVO a Imprimir el form desde la funcion envioDeFormularioHyF');
    console.log(form);

    this.hyfService.putModificarHyF(form.idHeaderFooter, form.imagenHeaderFooter, form.nombreHeaderFooter, form.fechaHeaderFooter, form.ciudadHeaderFooter, form.provinciaHeaderFooter, form.paisHeaderFooter, form.imagenBotonEditar, form.imagenBotonCerrar, form.imagenBotonEliminar, form.imagenBanner, form).subscribe(data =>{
      console.log(data);
      this.alertas.mostrarMensaje('Formulario modificado con éxito. Presione VOLVER para dirigirse a la página principal', 'Enhorabuena!!!');
    })

  }

}
