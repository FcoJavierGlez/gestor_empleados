import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/employee';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  @Input() employee!: Employee;
  @Output() refreshList = new EventEmitter();
  
  constructor(
    private router: Router, 
    private employeeSvc: EmployeesService, 
    public dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  editEmployee(): void {
    this.router.navigate([`/employee/${this.employee._id}`]);
  }

  deleteEmployee(): void {
    let deleteDialog = this.dialog.open(DialogComponent, {
      data: {
        title: 'Borrar empleado',
        message: 'Está a punto de borrar este empleado, esta acción es irreversible y no se podrá recuperar su información.'
      }
    });
    deleteDialog.afterClosed().subscribe(
      res => {
        if (res) 
          this.employeeSvc.deleteEmployee( `${this.employee._id}` ).subscribe(
            () => this.refreshList.emit()
          );
      }
    );
    
  }
}
