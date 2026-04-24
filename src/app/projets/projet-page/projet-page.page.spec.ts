import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjetPagePage } from './projet-page.page';

describe('ProjetPagePage', () => {
  let component: ProjetPagePage;
  let fixture: ComponentFixture<ProjetPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
