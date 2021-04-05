import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextHeaderComponent } from './context-header.component';

describe('ContextHeaderComponent', () => {
  let component: ContextHeaderComponent;
  let fixture: ComponentFixture<ContextHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
