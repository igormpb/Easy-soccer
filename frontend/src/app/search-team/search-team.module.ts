import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchTeamPageRoutingModule } from './search-team-routing.module';

import { SearchTeamPage } from './search-team.page';
import { MenuItemComponent } from '../components/menu-item/menu-item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchTeamPageRoutingModule
  ],
  declarations: [SearchTeamPage,MenuItemComponent]
})
export class SearchTeamPageModule {}
