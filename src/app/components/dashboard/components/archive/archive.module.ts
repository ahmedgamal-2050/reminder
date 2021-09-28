import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveComponent } from './archive.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const archiveRoutes: Routes = [
  {
    path: 'archive',
    component: ArchiveComponent,
  },
];

@NgModule({
  declarations: [
    ArchiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(archiveRoutes),
    FormsModule,
  ]
})
export class ArchiveModule { }
