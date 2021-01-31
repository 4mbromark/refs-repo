import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardButtonsComponent } from './board-buttons.component';

describe('BoardButtonsComponent', () => {
  let component: BoardButtonsComponent;
  let fixture: ComponentFixture<BoardButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
