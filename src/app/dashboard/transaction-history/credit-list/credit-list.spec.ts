import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditList } from './credit-list';

describe('CreditList', () => {
  let component: CreditList;
  let fixture: ComponentFixture<CreditList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
