import {NgModule} from '@angular/core';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';


@NgModule({
  exports: [
    AutocompleteLibModule, // Reference - https://stackblitz.com/edit/angular-ng-autocomplete-with-forms?file=src%2Fapp%2Fapp.component.html,src%2Fapp%2Fapp.component.ts
  ]
})
export class ThirdPartyModule { }
