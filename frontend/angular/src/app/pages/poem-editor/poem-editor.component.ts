import { Component, OnInit } from '@angular/core';
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
    private poetService: PoetService
  ) { }

  ngOnInit(): void {
    let id = JSON.parse(window.atob(this.token.split('.')[1])).id;
    this.poetService.getPoet(id, this.token).subscribe((data: any) => this.loggedPoet = data)
  }

}
