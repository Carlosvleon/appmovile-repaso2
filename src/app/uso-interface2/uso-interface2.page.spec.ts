import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsoInterface2Page } from './uso-interface2.page';

describe('UsoInterface2Page', () => {
  let component: UsoInterface2Page;
  let fixture: ComponentFixture<UsoInterface2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsoInterface2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
