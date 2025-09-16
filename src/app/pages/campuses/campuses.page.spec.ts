import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampusesPage } from './campuses.page';

describe('CampusesPage', () => {
  let component: CampusesPage;
  let fixture: ComponentFixture<CampusesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
