import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import { Card1PageComponent } from './card1-page/card1-page.component';

import { DataService } from './service/data.service';


@NgModule({
  declarations: [

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule

  ],
  providers:[DataService]
})
export class AppModule { }

