import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filter-db';
  columns: string[] = [
    'column_A',
    'column_B',
    'column_C',
    'column_D',
    'column_E',
    'column_F',
  ];
  filters = {
    column_A: '',
    column_B: '',
    column_C: '',
    column_D: '',
    column_E: '',
    column_F: '',
  }

  newData = {

  }

  data: any = []

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/data').subscribe((data: any) =>{
      this.data = data;
    });
  }

  onChangeEvent(event: any, column: string) {
    const val = event.target.value;
      // @ts-ignore
    this.filters[column] = val;

    this.http.post('http://localhost:3000/data',{
      filters: this.filters
    }).subscribe((data: any) =>{
      this.data = data;
    });
  }

  edit(_id: any) {
    console.log(_id);
  }

  add() {

  }
}

//
