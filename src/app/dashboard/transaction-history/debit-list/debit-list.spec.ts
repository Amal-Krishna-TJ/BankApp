import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitList } from './debit-list';

describe('DebitList', () => {
  let component: DebitList;
  let fixture: ComponentFixture<DebitList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebitList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
