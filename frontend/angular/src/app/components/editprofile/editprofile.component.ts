import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoetService } from 'src/app/services/poet.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  
  userForm!: FormGroup;
  token: any = localStorage.getItem("token")
  @Input("loggedPoet") poet: any

  constructor(
    private poetService: PoetService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: [this.poet.name, Validators.required], 
      lname: [this.poet.lname, Validators.required],
      uname: [this.poet.uname, Validators.required],
      mail: [this.poet.mail, Validators.required],
      passw: [this.poet.passw, Validators.required]
    });
    
  }

  change_data () {
    this.poetService.putPoet(this.token, this.poet.id, this.userForm);
    this.router.navigate(["/login/admin/profile"])
  }

}
