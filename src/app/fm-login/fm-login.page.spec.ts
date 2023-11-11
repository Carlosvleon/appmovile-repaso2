import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FmLoginPage } from './fm-login.page';

describe('FmLoginPage', () => {
  let component: FmLoginPage;
  let fixture: ComponentFixture<FmLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FmLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
