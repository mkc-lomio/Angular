import { NgModule } from '@angular/core';
import { PlaygroundComponent } from './playground.component';
import { RouterModule } from '@angular/router';
import { playgroundRoutes } from './playground.routes';
import { ChildComponent } from './child/child.component';
import { ModalComponent } from './modal/modal.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { MaterialModule } from '../shared/modules/material.module';
import { CoreModule } from '../shared/modules/core.module';


@NgModule({
  declarations: [PlaygroundComponent, ChildComponent, ModalComponent,
    ConvertToSpacesPipe],
  imports: [
    CoreModule,
    RouterModule.forRoot(playgroundRoutes),
    MaterialModule
  ]
})
export class PlaygroundModule { }
