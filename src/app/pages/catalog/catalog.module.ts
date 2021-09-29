import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogPageRoutingModule } from './catalog-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { CatalogPage } from './catalog.page';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogPageRoutingModule,
    PipesModule,
    ComponentsModule
  ],
  declarations: [CatalogPage]
})
export class CatalogPageModule {}
