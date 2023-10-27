import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundModule } from './playground/playground.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveformsModule } from './reactiveforms/reactiveforms.module';
import { PaginationModule } from './pagination/pagination.module';
import { RxjsPlaygroundComponent } from './rxjs-playground/rxjs-playground.component';
import { RxjsPlaygroundModule } from './rxjs-playground/rxjs-playground.module';
import { CssModule } from './css/css.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlaygroundModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveformsModule,
    PaginationModule,
    RxjsPlaygroundModule,
    CssModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
