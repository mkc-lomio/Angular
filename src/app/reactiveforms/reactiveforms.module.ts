import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveformsComponent } from "./reactiveforms.component";
import { RouterModule } from "@angular/router";
import { reactiveForms } from "./reactiveforms.routes";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [ReactiveformsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, // @angular/forms
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forRoot(reactiveForms)
  ],
})
export class ReactiveformsModule {}
