import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoetService } from 'src/app/services/poet.service';
import { RestorepasswordService } from './../../services/restorepassword.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-restorep',
  templateUrl: './restorep.component.html',
  styleUrls: ['./restorep.component.css']
})
export class RestorepComponent implements OnInit {
  restoreForm!: FormGroup;

  constructor(
    private poetService: PoetService,
    private formBuilder: FormBuilder,
    private router: Router,
    private restore:RestorepasswordService) { }

  ngOnInit(): void {
    this.restoreForm = this.formBuilder.group({
      mail: ['', Validators.required]
    });
  }
  

  get_poet_id() {
    
    this.restore.get_user_id(this.restoreForm.value.mail)
    console.log(this.restore.get_user_id(this.restoreForm.value.mail));
    
  }

  

}
