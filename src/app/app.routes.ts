import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./features/clients/client.module').then(m => m.ClientModule) },
    { path: 'client', loadChildren: () => import('./features/clients/client.module').then(m => m.ClientModule) },
    { path: '**', loadChildren: () => import('./features/clients/client.module').then(m => m.ClientModule) }
];
