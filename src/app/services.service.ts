import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Banco } from './banco.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private firebase: AngularFirestore) { }

  agregar(proyecto:Banco): Promise<any> {
    return this.firebase.collection('banco').add(proyecto);
  };

  listar(): Observable<any>{
    return this.firebase.collection('banco', ref => ref.orderBy('prioridad','desc')).snapshotChanges();
  }

  eliminar(id:string): Promise<any> {
    return this.firebase.collection('banco').doc(id).delete();
  }

  traerP(id:string):Observable<any> {
    return this.firebase.collection('banco').doc(id).snapshotChanges();
  }

  editar(id: string, data: any):Promise<any> {
    return this.firebase.collection('banco').doc(id).update(data)
  }
}
