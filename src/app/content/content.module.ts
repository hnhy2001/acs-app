import { NotfoundComponent } from './../layout/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { DetailComponent } from './detail/detail.component';
import { PriceComponent } from './price/price.component';
import { FeatureComponent } from './feature/feature.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { QuoteComponent } from './quote/quote.component';
import { SharedModule } from '../shared/shared.module';



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
    path: "about",
    component: AboutComponent,
  },
  {
    path: "services",
    component: ServicesComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "blog",
    component: BlogComponent,
  },
  {
    path: "detail",
    component: DetailComponent,
  },
  {
    path: "price",
    component: PriceComponent,
  },
  {
    path: "feature",
    component: FeatureComponent,
  },
  {
    path: "team",
    component: TeamComponent,
  },
  {
    path: "testimonial",
    component: TestimonialComponent,
  },
  {
    path: "quote",
    component: QuoteComponent,
  },
  {
    path: "**",
    component: NotfoundComponent,
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    BlogComponent,
    DetailComponent,
    PriceComponent,
    FeatureComponent,
    TeamComponent,
    TestimonialComponent,
    QuoteComponent
  ],
 
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    BrowserAnimationsModule,
    SharedModule
    
  ]
})
export class ContentModule { }
