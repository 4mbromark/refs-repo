import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlixComponent } from './admin-alix.component';

describe('AdminAlixComponent', () => {
  let component: AdminAlixComponent;
  let fixture: ComponentFixture<AdminAlixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAlixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAlixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
