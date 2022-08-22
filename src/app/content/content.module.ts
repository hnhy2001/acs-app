import { NotfoundComponent } from './../layout/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { OutServiceComponentComponent } from './service-component/component/out-service-component/out-service-component.component';
import { TestimonialComponentComponent } from './service-component/component/testimonial-component/testimonial-component.component';
import { AboutComponentComponent } from './about-us-component/component/about-component/about-component.component';
import { TeamMembersComponentComponent } from './about-us-component/component/team-members-component/team-members-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { BlogGridComponenComponent } from './blog-component/blog-grid-componen/blog-grid-componen.component';
import { BlogDetailComponentComponent } from './blog-component/blog-detail-component/blog-detail-component.component';

const route: Routes = [
  {
    path: 'home-component',
    component: HomeComponent
  },
  {
    path: "about-component",
    component: AboutUsComponentComponent
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "service-component",
    component: ServiceComponentComponent,
  },
  {
    path: "contact-component",
    component: ContactComponentComponent,
  },
  {
    path: "**",
    component: NotfoundComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponentComponent,
    ServiceComponentComponent,
    OutServiceComponentComponent,
    TestimonialComponentComponent,
    AboutComponentComponent,
    TeamMembersComponentComponent,
    ContactComponentComponent,
    BlogComponentComponent,
    BlogGridComponenComponent,
    BlogDetailComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    BrowserAnimationsModule,
    CarouselModule,
  ]
})
export class ContentModule { }
