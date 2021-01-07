import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardInfosComponent } from './board-infos.component';

describe('BoardInfosComponent', () => {
  let component: BoardInfosComponent;
  let fixture: ComponentFixture<BoardInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
