import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MalimonoPage } from './malimono.page';

describe('MalimonoPage', () => {
  let component: MalimonoPage;
  let fixture: ComponentFixture<MalimonoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MalimonoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
