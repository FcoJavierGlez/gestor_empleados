import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  pageName!: string;
  private idEmployee!: string;
  private employee!: Employee;
  newEmployee!: Employee;

  constructor( private employeesSvc: EmployeesService, private router: Router ) { 
    this.pageName = location.pathname.match(/^\/(\w+)/)?.[1] || 'home';
    this.idEmployee = location.pathname.match(/\/employee\/(\w+)/)?.[1] || '';
  }

  ngOnInit(): void {
    this.requestEmployee();
  }

  requestEmployee(): void {
    this.employeesSvc.getEmployee( this.idEmployee ).subscribe(
      res => {
        this.employee = res;
        this.newEmployee = JSON.parse( JSON.stringify(this.employee) );
      }
    );
  }

  getEmployee(): Employee {
    return this.employee;
  }

  getName(): string {
    return this.employee.name;
  }
  getPosition(): string {
    return this.employee.position;
  }
  getOffice(): string {
    return this.employee.office;
  }
  getSalary(): number {
    return this.employee.salary;
  }

  probando(event: Event): void {
    event.preventDefault();
    //validar formulario
    const obj = {
      name: this.employee.name == this.newEmployee.name ? undefined : this.newEmployee.name,
      position: this.employee.position == this.newEmployee.position ? undefined : this.newEmployee.position,
      office: this.employee.office == this.newEmployee.office ? undefined : this.newEmployee.office,
      salary: this.employee.salary == this.newEmployee.salary ? undefined : this.newEmployee.salary
    }
    const updated = JSON.parse( JSON.stringify(obj) );
    if ( !Object.entries( updated ).length ) return;
    this.employeesSvc.updateEmployee( this.idEmployee, updated );
    this.router.navigate( [`/`] );
  }

}
