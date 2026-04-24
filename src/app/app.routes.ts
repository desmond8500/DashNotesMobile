import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'index',
    loadComponent: () =>
      import('./shared/index-page/index-page.page').then(
        (m) => m.IndexPagePage,
      ),
  },
  {
    path: 'clients',
    loadComponent: () =>
      import('./clients/clients-page/clients-page.page').then(
        (m) => m.ClientsPagePage,
      ),
  },
  {
    path: 'client',
    loadComponent: () =>
      import('./clients/client-page/client-page.page').then(
        (m) => m.ClientPagePage,
      ),
  },
  {
    path: 'projets',
    loadComponent: () =>
      import('./projets/projets-page/projets-page.page').then(
        (m) => m.ProjetsPagePage,
      ),
  },
  {
    path: 'projet',
    loadComponent: () =>
      import('./projets/projet-page/projet-page.page').then(
        (m) => m.ProjetPagePage,
      ),
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },

];
