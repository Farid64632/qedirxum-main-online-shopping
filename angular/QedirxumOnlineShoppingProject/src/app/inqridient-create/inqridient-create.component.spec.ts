import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InqridientCreateComponent } from './inqridient-create.component';

describe('InqridientCreateComponent', () => {
  let component: InqridientCreateComponent;
  let fixture: ComponentFixture<InqridientCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InqridientCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InqridientCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
