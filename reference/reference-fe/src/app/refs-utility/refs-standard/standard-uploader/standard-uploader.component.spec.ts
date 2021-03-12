import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardUploaderComponent } from './standard-uploader.component';

describe('StandardUploaderComponent', () => {
  let component: StandardUploaderComponent;
  let fixture: ComponentFixture<StandardUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
