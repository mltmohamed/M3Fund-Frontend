import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-campaign',
  imports: [],
  templateUrl: './card-campaign.html',
  styleUrl: './card-campaign.css'
})
export class CardCampaign {
    @Input() amount: string = '';
    @Input() category: string = '';
    @Input() title: string = '';
    @Input() progress: string = '';
    @Input() collaborators: string = '';
    @Input() dates: string = '';
    @Input() action: string = '';
  
}
