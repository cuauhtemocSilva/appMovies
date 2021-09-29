import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page1PageRoutingModule } from './page1-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { Page1Page } from './page1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page1PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Page1Page]
})
export class Page1PageModule {}
