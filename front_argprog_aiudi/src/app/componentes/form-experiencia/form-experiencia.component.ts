import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';
import { experienciaLabModel } from 'src/app/model/experienciaLab.model';
import { ExperiencialabService } from 'src/app/service/experiencialab.service';

@Component({
  selector: 'app-form-experiencia',
  templateUrl: './form-experiencia.component.html',
  styleUrls: ['./form-experiencia.component.css']
})
export class FormExperienciaComponent implements OnInit {

  

  editarFormularioExp = new FormGroup({
    idExperienciaLab: new FormControl(''),
    lugarExpLab: new FormControl(''),
    actualoAnterioryTiempoExpLab: new FormControl(''),
    imagenExpLab: new FormControl(''),
    descripcionExpLab: new FormControl('')
    });

  constructor(private router: Router, private activerouter: ActivatedRoute, public alertas: AlertasService, public experienciaLaboralService: ExperiencialabService) { }

  experienciaLaboral: any;

  ngOnInit(): void {

    let idExperiencia = this.activerouter.snapshot.paramMap.get('id');

    console.log('Y ahora imprimo la id de EXPERIENCIA desde el componente form-experiencia: ')
    console.log(idExperiencia);

    this.experienciaLaboralService.getTraerUnaExperiencia(idExperiencia).subscribe(data => {
      this.experienciaLaboral = data;

      console.log('Imprimo experienciaLaboral desde el formulario: ');
      console.log(this.experienciaLaboral);
      console.log('Edito el formulario');

      this.editarFormularioExp.setValue({
        'idExperienciaLab': this.experienciaLaboral.idExpLab, //Tengo que mirar como son los nombres en el console.log de experienciaLaboral que coloqué anteriormente
        'lugarExpLab': this.experienciaLaboral.lugarExpLab,
        'actualoAnterioryTiempoExpLab': this.experienciaLaboral.actualoAnterioryTiempoExpLab,
        'imagenExpLab': this.experienciaLaboral.imagenExpLab,
        'descripcionExpLab': this.experienciaLaboral.descripcionExpLab
      });

      console.log('Imprimo los valores editarFormularioExp: ');
      console.log(this.editarFormularioExp.value);

    });

  }

  funcionVolverHome(){   
    this.router.navigate(['/home']);    
  }

  funcionNuevaExperiencia(){
    this.router.navigate(['/formNuevaExp']);
  }

  envioDeFormularioExp(form: experienciaLabModel){

  //  form.idAcercaDe = this.personaAcDe.idAcercaDe;
    console.log('Imprimo el form desde la funcion envioDeFormularioExp');
    console.log(form);

    console.log('Imprimo cada una de las variables del form');

    form.idExpLab = this.experienciaLaboral.idExpLab;

    console.log(form.idExpLab); //Ojo, los nombres son los del MODELO !!!
    console.log(form.lugarExpLab);
    console.log(form.actualoAnterioryTiempoExpLab);
    console.log(form.imagenExpLab);
    console.log(form.descripcionExpLab);

    console.log('VUELVO a Imprimir el form desde la funcion envioDeFormularioExp');
    console.log(form);

    this.experienciaLaboralService.putModificarUnaExperiencia(form.idExpLab, form.lugarExpLab, form.actualoAnterioryTiempoExpLab, form.imagenExpLab, form.descripcionExpLab, form).subscribe(data =>{
      console.log(data);
      this.alertas.mostrarMensaje('Experiencia Laboral modificada con éxito. Presione VOLVER para dirigirse a la página principal', 'Enhorabuena!!!');
    })
          
  }

  funcionEliminar(){
        
    this.experienciaLaboralService.deleteExperiencia(this.experienciaLaboral.idExpLab).subscribe(data => {this.experienciaLaboral = data});
        
    console.log('Se elimina la persona con la ID: ');
    console.log(this.experienciaLaboral.idExpLab);
        
    this.alertas.mostrarMensajeWarning('La experiencia laboral seleccionada se ha ELIMINADO, presione VOLVER para dirigirse a la página principal', 'Atención !!!');
        
  }

}
