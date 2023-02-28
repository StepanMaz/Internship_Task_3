import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  get<T>(url: string) : Observable<T> {
    return this.httpClient.get<T>(`${environment.apiURL}/${url}`);
  }

  put<T>(url: string, data: T) : void {
      this.httpClient.put(`${environment.apiURL}/${url}`, data);
  }

  post<T>(url: string, data: T) : void {
    this.httpClient.post(`${environment.apiURL}/${url}`, data).subscribe(console.log)
  }

  delete<T>(url: string, data: T) : void {
      this.httpClient.delete(`${environment.apiURL}/${url}/${environment.secret}`);
  }
}
