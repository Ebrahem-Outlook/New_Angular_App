import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientListComponent } from './client-list/client-list.component';


@NgModule({
  declarations: [
    ClientFormComponent,
    ClientListComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  bootstrap: [ClientModule]
})
export class ClientModule { }
