import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultsComponent } from './dashboard/results.component';

const ContentComponents = [
  HomeComponent,
  AboutComponent,
  ServicesComponent,
  ContactComponent,
  DashboardComponent,
  ResultsComponent
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, ContentComponents],
  exports: [],
})
export class ContentModule {}
