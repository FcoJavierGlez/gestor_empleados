import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EmployeesListComponent } from '../pages/home/employees-list/employees-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeCardComponent } from './home/employees-list/employee-card/employee-card.component';
import { ComponentsModule } from '../components/components.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    EmployeesListComponent,
    EmployeeComponent,
    EmployeeCardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    ComponentsModule,
    HomeComponent,
    EmployeeComponent
  ]
})
export class PagesModule { }
