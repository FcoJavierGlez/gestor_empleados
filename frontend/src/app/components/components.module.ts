import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NamePageComponent } from './name-page/name-page.component';
import { PipesModule } from '../pipes/pipes.module';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    NavComponent,
    NamePageComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    MatDialogModule
  ],
  exports: [
    NavComponent,
    NamePageComponent
  ]
})
export class ComponentsModule { }
