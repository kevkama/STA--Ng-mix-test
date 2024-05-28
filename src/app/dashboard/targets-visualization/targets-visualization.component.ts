import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-targets-visualization',
  templateUrl: './targets-visualization.component.html',
  styleUrls: ['./targets-visualization.component.scss']
})
export class TargetsVisualizationComponent {
  @Input() data: any;
}