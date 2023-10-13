import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParentService {
  private parentApiUrl = 'http://localhost:3000/api/parent';

  constructor(private http: HttpClient) {}

  /* Takes two parameters: `page` and `sortBy`. It returns an `Observable` that represents an HTTP GET request to a specific URL. */
  getPaginatedAndSortedData(page: number, sortBy: string): Observable<any> {
    const url = `${this.parentApiUrl}?page=${page}&sortBy=${sortBy}`;
    return this.http.get(url);
  }

}
