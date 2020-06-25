import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './core/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CarousselComponent } from './shared/caroussel/caroussel.component';
import { SlideComponent } from './shared/caroussel/slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    MenuComponent,
    CarousselComponent,
    SlideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
