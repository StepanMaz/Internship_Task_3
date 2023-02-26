import { HttpClient } from '@angular/common/http'
import {ExpandedBookDTO} from './book.js'
import { environment } from './environments/environment.js'
import { Observable } from 'rxjs';

export class BookService
{
    constructor(private httpClient: HttpClient) {

    }

    get<T>(url: string) : Observable<T> {
        return this.httpClient.get<T>(`${environment.apiURL}/${url}`);
    }

    put<T>(url: string, data: T) : void {
        this.httpClient.put(`${environment.apiURL}/${url}`, data);
    }

    post<T>(url: string, data: T) : void {
        this.httpClient.post(`${environment.apiURL}/${url}`, data);
    }

    delete<T>(url: string, data: T) : void {
        this.httpClient.delete(`${environment.apiURL}/${url}/${environment.secret}`);
    }
}