import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { RouterModule } from '@angular/router';
import { playgroundRoutes } from './playground.routes';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [PlaygroundComponent, ChildComponent, ModalComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(playgroundRoutes),
    FormsModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule
  ],
  entryComponents: [ModalComponent]
})
export class PlaygroundModule { }
