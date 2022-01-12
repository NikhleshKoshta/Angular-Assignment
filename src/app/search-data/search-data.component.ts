import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.scss']
})
export class SearchDataComponent implements OnInit {

  public displayedColumns: string[] = ['index', 'title', 'url', 'description'];
  public collection: MatTableDataSource<Data>;
  public showTable: any;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dataService: DataService
  ) {
    this.showTable = true;
  }


  ngOnInit() {
    // this.getRecords()
  }

  getRecords(key) {
    if (key) {
      this.dataService.getData(key).subscribe((data: Data) => {
        this.collection = new MatTableDataSource(data['results']);
        this.collection.paginator = this.paginator;
        this.showTable = (this.collection.filteredData.length >= 1) ? false : true;
      })
    } else {
      this.showTable = true;
    }

  }

}
