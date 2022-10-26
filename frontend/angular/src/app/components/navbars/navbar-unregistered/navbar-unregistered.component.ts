import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-unregistered',
  templateUrl: './navbar-unregistered.component.html',
  styleUrls: ['./navbar-unregistered.component.css']
})
export class NavbarUnregisteredComponent implements OnInit {

  username!: string;
  
  constructor() { }

  ngOnInit(): void {
    this.username = "pepito"
  }

}
