import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfilePageComponent } from './add-profile-page.component';

describe('AddProfilePageComponent', () => {
  let component: AddProfilePageComponent;
  let fixture: ComponentFixture<AddProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
