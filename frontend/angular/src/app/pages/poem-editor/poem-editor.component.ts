import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoetService } from 'src/app/services/poet.service';

@Component({
  selector: 'app-poem-editor',
  templateUrl: './poem-editor.component.html',
  styleUrls: ['./poem-editor.component.css']
})
export class PoemEditorComponent implements OnInit {

  token: any = localStorage.getItem("token")
  loggedPoet: any

  constructor(
    private poetService: PoetService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = JSON.parse(window.atob(this.token.split('.')[1])).id;
    this.poetService.getPoet(id, this.token).subscribe((data: any) => this.loggedPoet = data)
  }

  closeAndRedirect() {
    this.router.navigate(["/", "home"])
  }

}
