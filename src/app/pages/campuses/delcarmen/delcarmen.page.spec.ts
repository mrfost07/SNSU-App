import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DelcarmenPage } from './delcarmen.page';

describe('DelcarmenPage', () => {
  let component: DelcarmenPage;
  let fixture: ComponentFixture<DelcarmenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DelcarmenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
