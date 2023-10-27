import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/modules/material.module';
import { ThirdPartyModule } from '../shared/modules/third-party.module';
import { rxjsRoutes } from './rxjs-playground.routes';
import { RxjsPlaygroundComponent } from './rxjs-playground.component';
import { CoreModule } from '../shared/modules/core.module';



@NgModule({
  declarations: [RxjsPlaygroundComponent],
  imports: [
    CoreModule,
    ThirdPartyModule,
    RouterModule.forRoot(rxjsRoutes),
    MaterialModule
  ]
})
export class RxjsPlaygroundModule { }
