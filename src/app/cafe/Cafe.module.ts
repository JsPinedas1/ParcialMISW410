import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeComponent } from './Cafe.component';
import { ListarCafeComponent } from '../listar-cafe/ListarCafe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ CafeComponent ],
  declarations: [CafeComponent, ListarCafeComponent]
})
export class CafeModule { }
