import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RowComponent } from './row.component';
import { IRow } from 'src/app/interfaces';
import { RowChildComponent } from '../row-child/row-child.component';

describe('RowComponent', () => {
  let component: RowComponent;
  let fixture: ComponentFixture<RowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowComponent, RowChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a property "rowData" with the correct type', () => {
    const rowData: IRow[] = [
      {
        id: '1',
        int: 1,
        float: 2.3,
        color: '#fff',
        child: {
          id: '1',
          color: '#000',
        },
      },
      {
        id: '1',
        int: 1,
        float: 2.3,
        color: '#fff',
        child: {
          id: '1',
          color: '#000',
        },
      },
    ];

    component.rowData = rowData;

    expect(true).toBeTrue();
  });

  it('should render the correct number of rows', () => {
    const rowData: IRow[] = [
      {
        id: '1',
        int: 1,
        float: 2.3,
        color: '#fff',
        child: {
          id: '1',
          color: '#000',
        },
      },
      {
        id: '2',
        int: 1,
        float: 2.3,
        color: '#fff',
        child: {
          id: '1',
          color: '#000',
        },
      },
    ];
    component.rowData = rowData;

    fixture.detectChanges();

    const rows = [...fixture.debugElement.queryAll(By.css('.table > .table-row'))]    
    expect(rows.length).toBe(rowData.length);
  });

  it('should render the correct data in each row', async () => {
    const rowData: IRow[] = [
      {
        id: '1',
        int: 1,
        float: 2.3,
        color: '#fff',
        child: {
          id: '1',
          color: '#000',
        },
      },
      {
        id: '2',
        int: 1,
        float: 2.3,
        color: '#fff',
        child: {
          id: '1',
          color: '#000',
        },
      },
    ];
    component.rowData = rowData;

    fixture.detectChanges();

    const ids = [...fixture.debugElement.queryAll(By.css('[data-name="id"]'))].map((item: any) => {
      return item.nativeElement.textContent.trim();
    });

    const colors = [...fixture.debugElement.queryAll(By.css('[data-name="color"]'))].map((item: any) => {
      return item.nativeElement.textContent.trim();
    });

    expect(ids).toEqual(['1', '2']);
    expect(colors).toEqual(['#fff', '#fff']);
  });
});
