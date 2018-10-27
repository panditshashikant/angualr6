import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app/app.routing.module';
import {MatFormFieldModule,MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  //schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
