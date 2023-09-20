import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveformsComponent } from "./reactiveforms.component";
import { RouterModule } from "@angular/router";
import { reactiveForms } from "./reactiveforms.routes";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [ReactiveformsComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule, // @angular/forms
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule,
    AutocompleteLibModule, // Reference - https://stackblitz.com/edit/angular-ng-autocomplete-with-forms?file=src%2Fapp%2Fapp.component.html,src%2Fapp%2Fapp.component.ts
    RouterModule.forRoot(reactiveForms)
  ],
})
export class ReactiveformsModule {}
