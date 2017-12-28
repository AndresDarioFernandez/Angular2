import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardHeader} from "./dashboard-header";
import {PageViewsByBrowserWidget} from "./page-views-by-browser.component";
import {PageViewsPieChartWidget} from "./page-views-pie-chart.component";
import {ImpressionsByCountryWidget} from "./impresssions-by-country.component";
import { RouterModule } from '@angular/router';
import { dashboardRouterConfig } from './dashboard-router-config';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(dashboardRouterConfig),
  ],
  declarations: [
    DashboardHeader,
    PageViewsByBrowserWidget,
    PageViewsPieChartWidget,
    ImpressionsByCountryWidget],
    exports : [DashboardHeader]
})
export class DashboardModule { }
