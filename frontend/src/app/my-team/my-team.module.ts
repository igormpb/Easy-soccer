import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTeamPageRoutingModule } from './my-team-routing.module';

import { MyTeamPage } from './my-team.page';
import { MenuItemComponent } from '../components/menu-item/menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTeamPageRoutingModule
  ],
  declarations: [MyTeamPage,MenuItemComponent]
})
export class MyTeamPageModule {}
