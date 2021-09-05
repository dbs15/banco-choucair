import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListarComponent } from './listar/listar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';





@NgModule({
  declarations: [
    CreateComponent,
    ListarComponent,


  ],exports: [
    CreateComponent,
    ListarComponent,
 



  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule

  ]
})
export class BancoModule { }
