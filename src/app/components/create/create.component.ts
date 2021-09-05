import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Banco, Prioridad } from 'src/app/banco.interface';
import { ServicesService } from 'src/app/services.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  crearProyecto: FormGroup;
  submitted = false;
  id : string | null




  prioridades = [
    {
    id: 'Prioridad baja',
    desc: 'Prioridad baja'
    },
    {
      id: 'Prioridad media',
      desc: 'Prioridad media'
    },
    {
      id: 'Prioridad alta',
      desc: 'Prioridad alta'
   }
  ];







  constructor(private bancoService:ServicesService, private router:Router, private fb : FormBuilder, private aRoute: ActivatedRoute) {
    this.crearProyecto = this.fb.group({
      codigo: ["", Validators.required],
      fecha : [undefined, Validators.required],
      nombreIniciativa: ["", Validators.required],
      descripcionIniciativa: ["", Validators.required],
      prioridad: [Prioridad.baja, Validators.required],
      areaResponsable: ["", Validators.required],
      productOwner: ["", Validators.required],
      adjuntarDocumentos: ["", Validators.required],
      observaciones: ["", Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.traerInfo();
  }

  guardarEditar(){

    this.submitted = true;

    if (this.crearProyecto.invalid) {
      return;
    }

    if (this.id === null) {

      this.agregar()
    } else {

      this.editar(this.id)
    }




      }

      editar(id:string){

        const proyecto: Banco = {
          codigo: this.crearProyecto.value.codigo,
          fecha : this.crearProyecto.value.fecha,
          nombreIniciativa: this.crearProyecto.value.nombreIniciativa,
          descripcionIniciativa: this.crearProyecto.value.descripcionIniciativa,
          prioridad: this.crearProyecto.value.prioridad,
          areaResponsable: this.crearProyecto.value.areaResponsable,
          productOwner: this.crearProyecto.value.productOwner,
          adjuntarDocumentos: this.crearProyecto.value.adjuntarDocumentos,
          observaciones: this.crearProyecto.value.observaciones,}

        this.bancoService.editar(id, proyecto).then(()=>{
          alert("proyecto modificado")

        })
        this.router.navigate(['/listar'])
      }

      agregar(){
        const proyecto: Banco = {
          codigo: this.crearProyecto.value.codigo,
          fecha : this.crearProyecto.value.fecha,
          nombreIniciativa: this.crearProyecto.value.nombreIniciativa,
          descripcionIniciativa: this.crearProyecto.value.descripcionIniciativa,
          prioridad: this.crearProyecto.value.prioridad,
          areaResponsable: this.crearProyecto.value.areaResponsable,
          productOwner: this.crearProyecto.value.productOwner,
          adjuntarDocumentos: this.crearProyecto.value.adjuntarDocumentos,
          observaciones: this.crearProyecto.value.observaciones,
          };

          this.bancoService.agregar(proyecto).then(()=>{
            console.log('proyecto guardado');
          }).catch(error => {
            alert(error)
          })
      }

      traerInfo( ){
        if(this.id !== null){
          this.bancoService.traerP(this.id).subscribe(data =>{
            this.crearProyecto.setValue({
              codigo: data.payload.data()['codigo'],
              fecha : data.payload.data()['fecha'],
              nombreIniciativa: data.payload.data()['nombreIniciativa'],
              descripcionIniciativa: data.payload.data()['descripcionIniciativa'],
              prioridad: data.payload.data()['prioridad'],
              areaResponsable: data.payload.data()['areaResponsable'],
              productOwner: data.payload.data()['productOwner'],
              adjuntarDocumentos: data.payload.data()['adjuntarDocumentos'],
              observaciones: data.payload.data()['observaciones'],
            })

          })
        }
      }




}
