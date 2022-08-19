import { ContentModule } from './content/content.module';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './layout/header-component/header-component.component';
import { FooterComponentComponent } from './layout/footer-component/footer-component.component';
import { NotfoundComponent } from './layout/notfound/notfound.component';


const routes: Routes = []
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
