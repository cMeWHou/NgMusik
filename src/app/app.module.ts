import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ModalComponent } from './components/modal/modal.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SingersComponent } from './components/singers/singers.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    CategoriesComponent,
    AboutComponent,
    ContactsComponent,
    ModalComponent,
    ScheduleComponent,
    SingersComponent,
    SponsorsComponent,
    TestimonialsComponent,
    FooterComponent,
    PricingComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
