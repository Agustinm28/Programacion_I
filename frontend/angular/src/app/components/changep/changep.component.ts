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
  token: any = localStorage.getItem("token")
  id:any

  constructor(
    private poetService: PoetService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

    this.id = JSON.parse(window.atob(this.token.split('.')[1])).id;

    this.cpassForm = this.formBuilder.group({
      pass1: ['', Validators.required],
      pass2: ['', Validators.required]
    });
  }

  changePassword() {

    if (this.cpassForm.valid) {
      if (this.cpassForm.value.pass1 == this.cpassForm.value.pass2) {
        this.poetService.putPoet(this.token, this.id, {'passw':this.cpassForm.value.pass1});
      }
      else {
        console.log('contraseñas no son iguales');
        
      }
    }
    else {
      console.log('error en formulario');
      
    }

    //this.router.navigate(["/login/admin/profile"])

  }

}
