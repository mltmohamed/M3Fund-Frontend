import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoteurDashboard } from './poteur-dashboard';

describe('PoteurDashboard', () => {
  let component: PoteurDashboard;
  let fixture: ComponentFixture<PoteurDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoteurDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoteurDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
