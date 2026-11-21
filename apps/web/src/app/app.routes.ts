import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                children: [],
            },
            {
                path: 'task1',
                loadComponent: () => import('./task1/task1')
                    .then((c) => c.Task1),
            },
        ],
    },
];
