import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NomnbrePaginaNuevaPage } from './nomnbre-pagina-nueva.page';

describe('NomnbrePaginaNuevaPage', () => {
  let component: NomnbrePaginaNuevaPage;
  let fixture: ComponentFixture<NomnbrePaginaNuevaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NomnbrePaginaNuevaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
