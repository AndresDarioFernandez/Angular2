
import {Playlist} from "./playlist.component";


export const coursesRouterConfig = [
    {
        path: 'courses',
        loadChildren: '/src/app/courses/courses.module'
    },
    {
        path: 'playlist',
        component: Playlist,
        outlet: 'playlist'
    }
];