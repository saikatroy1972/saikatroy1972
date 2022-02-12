import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopheadnavComponent } from './topheadnav.component';

describe('TopheadnavComponent', () => {
  let component: TopheadnavComponent;
  let fixture: ComponentFixture<TopheadnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopheadnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopheadnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
