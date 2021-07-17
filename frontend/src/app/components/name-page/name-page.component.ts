import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-page',
  templateUrl: './name-page.component.html',
  styleUrls: ['./name-page.component.css']
})
export class NamePageComponent implements OnInit {

  @Input() pageName!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
