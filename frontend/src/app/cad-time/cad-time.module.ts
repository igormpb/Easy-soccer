import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadTimePageRoutingModule } from './cad-time-routing.module';

import { CadTimePage } from './cad-time.page';
import { MenuItemComponent } from '../components/menu-item/menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadTimePageRoutingModule
  ],
  declarations: [CadTimePage,MenuItemComponent]
})
export class CadTimePageModule {}
