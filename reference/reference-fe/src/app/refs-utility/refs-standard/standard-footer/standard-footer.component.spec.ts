import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardFooterComponent } from './standard-footer.component';

describe('StandardFooterComponent', () => {
  let component: StandardFooterComponent;
  let fixture: ComponentFixture<StandardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
