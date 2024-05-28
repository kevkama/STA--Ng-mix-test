import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TargetsVisualizationComponent } from './targets-visualization/targets-visualization.component';
import { TopCardMetricsComponent } from './top-card-metrics/top-card-metrics.component';
import { UpcomingInvoicesComponent } from './upcoming-invoices/upcoming-invoices.component';
import { SignupsOverviewComponent } from './signups-overview/signups-overview.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent
  },
  {
    path:'target',
    component: TargetsVisualizationComponent
  },
  {
    path: 'top',
    component: TopCardMetricsComponent
  },
  {
    path: 'upcomming',
    component: UpcomingInvoicesComponent
  },
  {
    path: 'signups',
    component: SignupsOverviewComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
