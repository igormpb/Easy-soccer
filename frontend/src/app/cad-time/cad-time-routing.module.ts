import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadTimePage } from './cad-time.page';

const routes: Routes = [
  {
    path: '',
    component: CadTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadTimePageRoutingModule {}
