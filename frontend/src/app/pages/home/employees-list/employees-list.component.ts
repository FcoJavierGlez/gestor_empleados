import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employeesList!: Employee[];

  constructor( private employeesSvc: EmployeesService ) { }

  ngOnInit(): void { 
    this.requestEmployees();
  }

  requestEmployees(): void {
    this.employeesSvc.getEmployees().subscribe(
      (res: Employee[]) => this.employeesList = res,
      err => console.log('Status code error:', err.status)
    );
  }

}
