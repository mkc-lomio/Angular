import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination.component';
import { paginationRoutes } from './pagination.routes';
import { CoreModule } from '../shared/modules/core.module';
import { MaterialModule } from '../shared/modules/material.module';



@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CoreModule,
    RouterModule.forRoot(paginationRoutes),
    MaterialModule
  ]
})
export class PaginationModule { }
