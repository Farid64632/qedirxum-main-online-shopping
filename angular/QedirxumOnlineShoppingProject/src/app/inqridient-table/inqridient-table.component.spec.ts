import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InqridientTableComponent } from './inqridient-table.component';

describe('InqridientTableComponent', () => {
  let component: InqridientTableComponent;
  let fixture: ComponentFixture<InqridientTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InqridientTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InqridientTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
