import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../interfaces/employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  readonly URL_API: string = 'http://localhost:3000/api/employees';

  constructor( private http: HttpClient ) { }

  /* private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      //console.error( 'Error:', error ); // log to console instead
      //console.error(`${operation} failed: ${error.message}`);
      console.error( 'Status code error:', error.status ); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } */

  private handleError( err: HttpErrorResponse ){
    throwError(err);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>( this.URL_API )
      .pipe(
        catchError( err => throwError(err) )
      );
  }
  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>( `${this.URL_API}/${id}` )
      .pipe(
        catchError( err => throwError(err) )
      );
  }
  updateEmployee(id: string, body: any): Observable<Employee> {
    return this.http.put<Employee>( `${this.URL_API}/${id}`, body )
      .pipe(
        catchError( err => throwError(err) )
      );
  }
  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>( `${this.URL_API}/${id}` );
  }
}
