import { Component, OnInit } from '@angular/core';
import { Banco } from 'src/app/banco.interface';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  proyectos: any[] = [];

  constructor(private bancoService: ServicesService) { }

  ngOnInit(): void {
    this.listarProyectos()
  }

  listarProyectos () {
    this.bancoService.listar().subscribe(data =>{
    this.proyectos = [];
    data.forEach((element:any)=>{
      this.proyectos.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      })

    });
    console.log(this.proyectos)
  });

 }

 eliminarProyectos(id:string){
   this.bancoService.eliminar(id).then(()=>{
    alert("proyecto eliminado")
   })
 }

}

