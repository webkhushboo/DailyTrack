// Core modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Application components
import { AddEditCampaignComponent } from './add-edit-campaign/add-edit-campaign.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'campaigns/create',
    component: AddEditCampaignComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
