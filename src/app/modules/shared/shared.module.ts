import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '@app/app-material.module';
import { GenericTableComponent } from './components/generic-table/generic-table.component';

@NgModule({
  declarations: [
    GenericTableComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    GenericTableComponent, AppMaterialModule, FlexLayoutModule, ReactiveFormsModule,
  ],
})
export class SharedModule { }
