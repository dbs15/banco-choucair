import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';

import { ListarComponent } from './components/listar/listar.component';

const routes: Routes = [
  {path: "", component:CreateComponent},
  {path: "listar", component:ListarComponent},
  {path: "editar/:id", component:CreateComponent},
  {path: "**", redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
