import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroRegister } from './intro-register';

describe('IntroRegister', () => {
  let component: IntroRegister;
  let fixture: ComponentFixture<IntroRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
