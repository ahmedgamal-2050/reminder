import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCategoriesComponent } from './components/add-categories/add-categories.component';

const categoriesRoutes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent,
  },
];

@NgModule({
  declarations: [
    CategoriesComponent,
    AddCategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoriesModule { }
