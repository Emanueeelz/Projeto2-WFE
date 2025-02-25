import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/biblioteca';

  constructor(private http: HttpClient) { }

  getBiblioteca(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getJogoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
