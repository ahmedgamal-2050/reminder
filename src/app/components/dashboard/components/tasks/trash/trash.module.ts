import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashComponent } from './trash.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

const trashRoutes: Routes = [
  {
    path: 'trash',
    component: TrashComponent,
  },
];

@NgModule({
  declarations: [
    TrashComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(trashRoutes),
    FormsModule,
    SharedModule,
  ]
})
export class TrashModule { }
