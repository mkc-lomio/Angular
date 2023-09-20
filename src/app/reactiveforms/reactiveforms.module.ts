import { NgModule } from "@angular/core";
import { ReactiveformsComponent } from "./reactiveforms.component";
import { RouterModule } from "@angular/router";
import { reactiveForms } from "./reactiveforms.routes";
import { MaterialModule } from "../shared/modules/material.module";
import { ThirdPartyModule } from "../shared/modules/third-party.module";
import { CoreModule } from "../shared/modules/core.module";

@NgModule({
  declarations: [ReactiveformsComponent],
  imports: [
    CoreModule,
    ThirdPartyModule,
    RouterModule.forRoot(reactiveForms),
    MaterialModule
  ],
})
export class ReactiveformsModule {}
