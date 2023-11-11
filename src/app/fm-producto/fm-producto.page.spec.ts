import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FmProductoPage } from './fm-producto.page';

describe('FmProductoPage', () => {
  let component: FmProductoPage;
  let fixture: ComponentFixture<FmProductoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FmProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
