import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-signups-overview',
  templateUrl: './signups-overview.component.html',
  styleUrls: ['./signups-overview.component.scss']
})
export class SignupsOverviewComponent {
  @Input() data: any;
}