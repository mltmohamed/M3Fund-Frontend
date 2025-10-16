import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCampaign } from './card-campaign';

describe('CardCampaign', () => {
  let component: CardCampaign;
  let fixture: ComponentFixture<CardCampaign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCampaign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCampaign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
