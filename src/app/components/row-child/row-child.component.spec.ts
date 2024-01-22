import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowChildComponent } from './row-child.component';

describe('RowChildComponent', () => {
  let component: RowChildComponent;
  let fixture: ComponentFixture<RowChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowChildComponent]
    });
    fixture = TestBed.createComponent(RowChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
