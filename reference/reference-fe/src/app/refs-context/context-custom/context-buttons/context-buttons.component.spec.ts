import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextButtonsComponent } from './context-buttons.component';

describe('BoardButtonsComponent', () => {
  let component: ContextButtonsComponent;
  let fixture: ComponentFixture<ContextButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
