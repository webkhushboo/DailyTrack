import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CampaignService } from '@app/modules/core/campaign.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-campaign',
  templateUrl: './add-edit-campaign.component.html',
  styleUrls: ['./add-edit-campaign.component.scss']
})
export class AddEditCampaignComponent implements OnInit {

  addEditForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private campaignService: CampaignService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addEditForm = this.fb.group({
      id: new FormControl(),
      name: new FormControl(),
      groupName: new FormControl(),
      trafficSource: new FormControl(),
      revenue: new FormControl(),
      cost: new FormControl(),
      profit: new FormControl(),
      rate: new FormControl(),
      adFormat: new FormControl(),
    });
  }

  saveCampaign() {
    this.campaignService.addCampaign(this.addEditForm.value).then((data) => {
      this.router.navigate(['']);
    })
      .catch(() => console.log('Error'));
  }

}
