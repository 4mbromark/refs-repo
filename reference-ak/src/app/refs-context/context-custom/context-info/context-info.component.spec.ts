import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextInfoComponent } from './context-info.component';

describe('ContextInfoComponent', () => {
  let component: ContextInfoComponent;
  let fixture: ComponentFixture<ContextInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
