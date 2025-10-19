import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAssociation } from './register-association';

describe('RegisterAssociation', () => {
  let component: RegisterAssociation;
  let fixture: ComponentFixture<RegisterAssociation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterAssociation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAssociation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
