import { NotfoundComponent } from './../layout/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

const route: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "**",
    component: NotfoundComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    BrowserAnimationsModule,
    CarouselModule,
  ]
})
export class ContentModule { }
