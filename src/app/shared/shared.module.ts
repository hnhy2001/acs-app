import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LogoComponent } from './logo/logo.component';
import { PersonComponent } from './person/person.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhyChooseComponent } from './why-choose/why-choose.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { PricingComponent } from './pricing/pricing.component';
import { RequestComponent } from './request/request.component';
import { MembersComponent } from './members/members.component';


@NgModule({
  declarations: [
    LogoComponent,
    PersonComponent,
    AboutUsComponent,
    WhyChooseComponent,
    OurServicesComponent,
    PricingComponent,
    RequestComponent,
    MembersComponent
  ],
  exports: [
    LogoComponent,
    PersonComponent,
    AboutUsComponent,
    WhyChooseComponent,
    OurServicesComponent,
    PricingComponent,
    RequestComponent,
    MembersComponent,
  ]
  ,
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class SharedModule { }
