import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumniPage } from './alumni.page';

describe('AlumniPage', () => {
  let component: AlumniPage;
  let fixture: ComponentFixture<AlumniPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
