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
    'id',
    'certificate_number',
    'business_name',
    'date',
    'result',
    'sector',
  ];
  filters = {
    id: '',
    certificate_number: '',
    business_name: '',
    date: '',
    result: '',
    sector: '',
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
    if(column === 'certificate_number') {
      // @ts-ignore
      this.filters[column] = +val;
    }
    else {
      // @ts-ignore
      this.filters[column] = val;
    }

    this.http.post('http://localhost:3000/data',{
      filters: this.filters
    }).subscribe((data: any) =>{
      this.data = data;
    });
  }
}
