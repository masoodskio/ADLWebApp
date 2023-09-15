import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultService } from './result.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent {
  showLoading = false;
  constructor(readonly resultService: ResultService) {}

  FormatDisplayDate(dateTime: string): string {
   
    let date = new Date(dateTime);
    return date.toLocaleString();
  }

  FormatProviderDisplay(ProviderName: string, ProviderOrg: string): string {
    if(ProviderOrg === null) {
      return ProviderName
    }

    if(ProviderName === null) {
      return ProviderOrg
    }

    return ProviderName + ' - ' + ProviderOrg;
  }
}
