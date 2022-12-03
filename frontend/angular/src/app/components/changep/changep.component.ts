import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoetService } from 'src/app/services/poet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-changep',
  templateUrl: './changep.component.html',
  styleUrls: ['./changep.component.css']
})
export class ChangepComponent implements OnInit {
  cpassForm!: FormGroup;

  constructor(
    private poetService: PoetService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.cpassForm = this.formBuilder.group({
      pass1: ['', Validators.required],
      pass2: ['', Validators.required]
    });
  }

}
