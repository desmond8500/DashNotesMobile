import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexPagePage } from './index-page.page';

describe('IndexPagePage', () => {
  let component: IndexPagePage;
  let fixture: ComponentFixture<IndexPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
