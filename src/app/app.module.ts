import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarsState } from "./store/cars/cars.state";

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      CarsState
    ], {
      developmentMode: true
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
