import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCardlistComponent } from './board-cardlist.component';

describe('BoardCardlistComponent', () => {
  let component: BoardCardlistComponent;
  let fixture: ComponentFixture<BoardCardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardCardlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardCardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
