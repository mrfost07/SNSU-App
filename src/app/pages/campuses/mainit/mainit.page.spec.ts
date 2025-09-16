import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainitPage } from './mainit.page';

describe('MainitPage', () => {
  let component: MainitPage;
  let fixture: ComponentFixture<MainitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
