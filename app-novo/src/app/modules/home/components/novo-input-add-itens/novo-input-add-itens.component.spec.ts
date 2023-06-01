import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoInputAddItensComponent } from './novo-input-add-itens.component';

describe('NovoInputAddItensComponent', () => {
  let component: NovoInputAddItensComponent;
  let fixture: ComponentFixture<NovoInputAddItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovoInputAddItensComponent]
    });
    fixture = TestBed.createComponent(NovoInputAddItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
