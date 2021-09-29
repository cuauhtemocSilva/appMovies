import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    HeaderComponent,
    DetailComponent
  ],
  exports:[
    HeaderComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
