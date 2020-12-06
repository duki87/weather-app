import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './includes/nav/nav.component';

//Material
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button'; 
import { MatAutocompleteModule } from '@angular/material/autocomplete'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';  
import { MatListModule } from '@angular/material/list';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //Material
    FlexLayoutModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
