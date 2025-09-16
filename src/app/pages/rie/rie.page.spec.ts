import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RiePage } from './rie.page';

describe('RiePage', () => {
  let component: RiePage;
  let fixture: ComponentFixture<RiePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
