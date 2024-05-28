import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-card-metrics',
  templateUrl: './top-card-metrics.component.html',
  styleUrls: ['./top-card-metrics.component.scss']
})
export class TopCardMetricsComponent {
  @Input() data: any;
}