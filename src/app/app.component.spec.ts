import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { RowComponent } from './components/row/row.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, FilterFormComponent, RowComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  it('should create the AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the RowComponent', () => {
    const fixture = TestBed.createComponent(RowComponent);
    const rowComponent = fixture.componentInstance;
    expect(rowComponent).toBeTruthy();
  });
});
