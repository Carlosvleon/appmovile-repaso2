import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FmMenuPage } from './fm-menu.page';

describe('FmMenuPage', () => {
  let component: FmMenuPage;
  let fixture: ComponentFixture<FmMenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FmMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
