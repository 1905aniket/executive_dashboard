import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExecuteDashboardComponent } from './execute-dashboard/execute-dashboard.component';
import { DASHBOARD_PATH } from './shared/path-const';

const routes: Routes = [
  {
    path: DASHBOARD_PATH,
    component: ExecuteDashboardComponent,
  },
  {
    path: '',
    redirectTo: DASHBOARD_PATH,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
