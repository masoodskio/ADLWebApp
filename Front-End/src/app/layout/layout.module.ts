import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const LayoutComponents = [NavbarComponent, FooterComponent];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, NgbCollapseModule, LayoutComponents],
  exports: [],
})
export class LayoutModule {}
