import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentLoaderService {
  constructor(private http: HttpClient) { }

  loadContent(year: string): Observable<any> {
    return this.http.get(`/src/year${year}.html`, { responseType: 'text' });
  }
}
