import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//componentes
import { HeaderComponent } from './components/header/header.component';
import { NovoButtonDeleteAllComponent } from './components/novo-button-delete-all/novo-button-delete-all.component';
import { NovoInputAddItensComponent } from './components/novo-input-add-itens/novo-input-add-itens.component';

//page
import { HomeComponent } from './pages/home/home.component';
import { NovoList1Component } from './components/novo-list1/novo-list1.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NovoButtonDeleteAllComponent,
    NovoInputAddItensComponent,
    HomeComponent,
    NovoList1Component
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
