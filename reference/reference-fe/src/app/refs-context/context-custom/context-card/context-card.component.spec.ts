import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextCardComponent } from './context-card.component';

describe('ContextCardComponent', () => {
  let component: ContextCardComponent;
  let fixture: ComponentFixture<ContextCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
