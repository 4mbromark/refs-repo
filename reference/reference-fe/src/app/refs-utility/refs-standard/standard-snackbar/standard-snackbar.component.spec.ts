import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSnackbarComponent } from './standard-snackbar.component';

describe('StandardSnackbarComponent', () => {
  let component: StandardSnackbarComponent;
  let fixture: ComponentFixture<StandardSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardSnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
