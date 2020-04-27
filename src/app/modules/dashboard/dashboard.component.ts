import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../core/campaign.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public columns = [
    {
      columnDef: 'id',
      header: 'ID',
      cell: (element: any) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: any) => `${element.name}`,
    },
    {
      columnDef: 'adFormat',
      header: 'Ad Format',
      cell: (element: any) => `${element.adFormat}`,
    },
    {
      columnDef: 'groupName',
      header: 'Group Name',
      cell: (element: any) => `${element.groupName}`,
    },
    {
      columnDef: 'trafficSource',
      header: 'Traffic Source',
      cell: (element: any) => `${element.trafficSource}`,
    },
    {
      columnDef: 'revenue',
      header: 'Revenue',
      cell: (element: any) => `${element.revenue}`,
    },
    {
      columnDef: 'cost',
      header: 'Cost',
      cell: (element: any) => `${element.cost}`,
    },
    {
      columnDef: 'profit',
      header: 'Profit',
      cell: (element: any) => `${element.profit}`,
    },
    {
      columnDef: 'rate',
      header: 'ROI',
      cell: (element: any) => `${element.rate}`,
    },
  ];

  public dataSource;

  constructor(
    private campaignServie: CampaignService
  ) {

  }

  ngOnInit() {
    this.campaignServie.getCampaignsList().subscribe(
      (data) => this.dataSource = data);
  }
}
