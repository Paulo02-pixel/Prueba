import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';

const InspectionManagementComponent = () => import('./monitoring/pages/inspection-management/inspection-management.component').then(m => m.InspectionManagementComponent);
const PageNotFoundComponent = () => import('./public/pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent);
const baseTitle = 'Tend';

/**
 * @summary Application route configuration for Tend App.
 * Defines the client-side navigation paths for the application.
 * Includes the Home route, redirect from empty path, and fallback for unknown routes.
 *
 * @author Paulo Quincho
 */

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: `${baseTitle} | Home` },
  { path: 'inspections/:id', loadComponent: InspectionManagementComponent, title: `${baseTitle} | Inspections` },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', loadComponent: PageNotFoundComponent, title: `${baseTitle} | Page Not Found` }
];
