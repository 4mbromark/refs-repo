import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardNotfoundComponent } from './board-notfound.component';

describe('BoardNotfoundComponent', () => {
  let component: BoardNotfoundComponent;
  let fixture: ComponentFixture<BoardNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardNotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
