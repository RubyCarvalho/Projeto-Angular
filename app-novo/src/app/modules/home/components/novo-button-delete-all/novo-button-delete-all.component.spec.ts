import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoButtonDeleteAllComponent } from './novo-button-delete-all.component';

describe('NovoButtonDeleteAllComponent', () => {
  let component: NovoButtonDeleteAllComponent;
  let fixture: ComponentFixture<NovoButtonDeleteAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovoButtonDeleteAllComponent]
    });
    fixture = TestBed.createComponent(NovoButtonDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
