import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TopCardMetricsComponent } from './top-card-metrics/top-card-metrics.component';
import { TargetsVisualizationComponent } from './targets-visualization/targets-visualization.component';
import { SignupsOverviewComponent } from './signups-overview/signups-overview.component';
import { UpcomingInvoicesComponent } from './upcoming-invoices/upcoming-invoices.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    TopCardMetricsComponent,
    TargetsVisualizationComponent,
    SignupsOverviewComponent,
    UpcomingInvoicesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule
  ],
  
})
export class DashboardModule { }