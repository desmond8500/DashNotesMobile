import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjetsPagePage } from './projets-page.page';

describe('ProjetsPagePage', () => {
  let component: ProjetsPagePage;
  let fixture: ComponentFixture<ProjetsPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
