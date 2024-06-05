import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getMonth, getYear, parseISO } from 'date-fns';
import { Observable } from 'rxjs';
import { Executive } from '../modal';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private _httpClient: HttpClient) {}

  getData(): Observable<Executive[]> {
    return this._httpClient.get<Executive[]>('assets/data.json');
  }

  filterData(data: Executive[], month: number, year: number): Executive[] {
    return data.filter((item) => {
      const itemDate = parseISO(item.date);
      return getMonth(itemDate) === month && getYear(itemDate) === year;
    });
  }
}
