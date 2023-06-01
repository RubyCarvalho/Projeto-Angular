import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoList1Component } from './novo-list1.component';

describe('NovoList1Component', () => {
  let component: NovoList1Component;
  let fixture: ComponentFixture<NovoList1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovoList1Component]
    });
    fixture = TestBed.createComponent(NovoList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
