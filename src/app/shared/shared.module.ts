import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';
import { CriteraFilterComponent } from './critera-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    StarComponent,
    CriteraFilterComponent
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    CriteraFilterComponent
  ]
})
export class SharedModule { }
