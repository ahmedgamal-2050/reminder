import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPocketComponent } from './my-pocket.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

const myPocketRoutes: Routes = [
  {
    path: 'my-pocket',
    component: MyPocketComponent,
  },
];

@NgModule({
  declarations: [
    MyPocketComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(myPocketRoutes),
    FormsModule,
    SharedModule,
  ]
})
export class MyPocketModule { }
