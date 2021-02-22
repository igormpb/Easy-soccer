import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3003/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTeams(url): Observable<any> {
    return this.http.get(`${baseUrl}${url}`);
  }
  getMembers(url,data): Observable<any> {
    return this.http.get(`${baseUrl}${url}`, data);
  }

  createTeam(url,data): Observable<any> {
    return this.http.post(`${baseUrl}${url}`, data);
  }
  getUser(url,id): Observable<any> {
    return this.http.get(`${baseUrl}${url}/${id}`);
  }

  account(url,data): Observable<any> {
    return this.http.post(`${baseUrl}${url}`, data);
  }

  updateUser(url,id, data): Observable<any> {
    return this.http.put(`${baseUrl}${url}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
