import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../interfaces/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  readonly URL_API: string = 'http://localhost:3000/api/employees';

  constructor( private http: HttpClient ) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>( this.URL_API );
  }
  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>( `${this.URL_API}/${id}` );
  }
  updateEmployee(id: string, body: any): void {
    this.http.put( `${this.URL_API}/${id}`, body ).subscribe();
  }
}
