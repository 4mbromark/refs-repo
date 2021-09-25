import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextFooterComponent } from './context-footer.component';

describe('ContextFooterComponent', () => {
  let component: ContextFooterComponent;
  let fixture: ComponentFixture<ContextFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
