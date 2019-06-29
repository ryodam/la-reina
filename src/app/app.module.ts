import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { MateriaPrimaComponent } from './components/materia-prima/materia-prima.component';

@NgModule({
  declarations: [
    AppComponent,
    MateriaPrimaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
