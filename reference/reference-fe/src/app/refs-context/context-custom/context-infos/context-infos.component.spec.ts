import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextInfosComponent } from './context-infos.component';

describe('ContextInfosComponent', () => {
  let component: ContextInfosComponent;
  let fixture: ComponentFixture<ContextInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
