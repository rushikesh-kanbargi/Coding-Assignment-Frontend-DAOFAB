import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChildService {
  private childApiUrl = 'http://localhost:3000/api/child';

  constructor(private http: HttpClient) {}

 /* Retrieves data for a child element based on its parent ID. It is used to retrieve the child data associated with the parent entity. */
  getChildData(parentId: number): Observable<any> {
    const url = `${this.childApiUrl}/${parentId}`;
    return this.http.get<any[]>(url);
  }
}
