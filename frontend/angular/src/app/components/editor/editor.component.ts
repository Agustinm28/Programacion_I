import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoemService } from 'src/app/services/poem.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  token: any = localStorage.getItem("token")
  poemForm!: FormGroup
  previousPoem: any = {title: "", body: ""}
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private poemService: PoemService
  ) { }

  ngOnInit(): void {
    this.poemForm = this.formBuilder.group({
      title: [this.previousPoem.title, Validators.required], 
      body: [this.previousPoem.body, Validators.required]  
    });
  }

  post(data: any) {
    this.poemService.postPoem(this.token, data).subscribe({
      next: (rta: any) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast: any) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Se ha publicado tu poema "' + data.title + '".'
        })
        this.router.navigate(["/", "home"])
      }, error: (error) =>{
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast: any) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Necesitas calificar más poemas antes de poder publicar.'
        })
      }, complete: () => {
      }
    })
  }

  put(data: any) {
    this.poemService.putPoem(this.token, this.previousPoem.id, data).subscribe({
      next: (rta: any) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast: any) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Se ha actualizado tu poema "' + data.title + '".'
        })
        this.router.navigate(["/", "home"])
      }, error: (error) =>{
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast: any) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: error.json()
        })
      }, complete: () => {
      }
    })
  }

  submit() {
    if (this.poemForm.valid) {
      let title = this.poemForm.value.title;
      let body = this.poemForm.value.body;
      if (this.previousPoem.title == "" && this.previousPoem.body == "") {
        this.post({"title": title, "body": body})
      }
      else {
        this.put({"title": title, "body": body})
      }
    }
    else{
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast: any) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Título y/o cuerpo vacíos.'
      })
    }
  }

}
