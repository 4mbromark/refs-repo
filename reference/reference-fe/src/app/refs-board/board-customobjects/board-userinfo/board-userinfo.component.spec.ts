import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardUserinfoComponent } from './board-userinfo.component';

describe('BoardUserinfoComponent', () => {
  let component: BoardUserinfoComponent;
  let fixture: ComponentFixture<BoardUserinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardUserinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardUserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
