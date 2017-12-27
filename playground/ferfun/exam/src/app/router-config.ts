import {LessonsListComponent} from "./lessons/lessons-list/lessons-list.component";
import {Home} from "./router/home.component";
import {Route} from "@angular/router";
import {coursesRouterConfig} from "./courses/courses-router-config";
import {dashboardRouterConfig} from "./dashboard/dashboard-router-config";

const indexRoute:Route = {
    path: "",
    component: Home
};

const fallbackRoute:Route = {
    path: '**',
    component: Home
};

export const routeConfig = [
    {
        path: 'home',
        component: Home
    },
    ...coursesRouterConfig,
    ...dashboardRouterConfig,
    {
        path: 'lessons',
        component: LessonsListComponent
    },
    fallbackRoute,
    indexRoute
];
