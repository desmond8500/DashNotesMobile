import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientsPagePage } from './clients-page.page';

describe('ClientsPagePage', () => {
  let component: ClientsPagePage;
  let fixture: ComponentFixture<ClientsPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
