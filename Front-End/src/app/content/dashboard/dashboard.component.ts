import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResultsComponent } from './results.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ResultsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  showLoading = false;
  constructor() {
   }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
