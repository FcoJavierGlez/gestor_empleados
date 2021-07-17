import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalizePageNamePipe } from './normalize-page-name.pipe';



@NgModule({
  declarations: [
    NormalizePageNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NormalizePageNamePipe
  ]
})
export class PipesModule { }
