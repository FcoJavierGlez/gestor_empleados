import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NamePageComponent } from './name-page/name-page.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    NavComponent,
    NamePageComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    NavComponent,
    NamePageComponent
  ]
})
export class ComponentsModule { }
