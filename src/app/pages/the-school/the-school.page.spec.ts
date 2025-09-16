import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TheSchoolPage } from './the-school.page';

describe('TheSchoolPage', () => {
  let component: TheSchoolPage;
  let fixture: ComponentFixture<TheSchoolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TheSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
