import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  @Input() employee!: Employee;
  
  constructor(private router: Router) { }

  ngOnInit(): void { }

  editEmployee(): void {
    this.router.navigate([`/employee/${this.employee._id}`]);
  }

}
