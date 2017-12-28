import {Routes, Route} from "@angular/router";
import {DashboardHeader} from "./dashboard-header";
import {PageViewsByBrowserWidget} from "./page-views-by-browser.component";
import {PageViewsPieChartWidget} from "./page-views-pie-chart.component";
import {ImpressionsByCountryWidget} from "./impresssions-by-country.component";

const indexRoute:Route = {
    path: "",
    component: DashboardHeader
};

const fallbackRoute:Route = {
    path: '**',
    component: DashboardHeader
};

export const dashboardRouterConfig:Routes = [
    {
        path: 'dashoboard',
        component: DashboardHeader
    },
    {
        path: 'section1',
        component: PageViewsByBrowserWidget,
        outlet: 'section1'
    },
    {
        path: 'section2',
        component: PageViewsPieChartWidget,
        outlet: 'section2'
    },
    {
        path: 'section3',
        component: ImpressionsByCountryWidget,
        outlet: 'section3'
    },
    fallbackRoute,
    indexRoute
];
