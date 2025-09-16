import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcademicsPage } from './academics.page';

describe('AcademicsPage', () => {
  let component: AcademicsPage;
  let fixture: ComponentFixture<AcademicsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
