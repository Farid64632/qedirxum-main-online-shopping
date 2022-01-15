import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoMenuComponent } from './modal-info-menu.component';

describe('ModalInfoMenuComponent', () => {
  let component: ModalInfoMenuComponent;
  let fixture: ComponentFixture<ModalInfoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInfoMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInfoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
