import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/modules/material.module';
import { ThirdPartyModule } from '../shared/modules/third-party.module';
import { CoreModule } from '../shared/modules/core.module';
import { CssComponent } from './css.component';
import { cssRoutes } from './css.routes';



@NgModule({
  declarations: [CssComponent],
  imports: [
    CoreModule,
    ThirdPartyModule,
    RouterModule.forRoot(cssRoutes),
    MaterialModule
  ]
})
export class CssModule { }
