import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RatingService } from 'src/app/services/rating.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  calForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ratingService: RatingService
    ) { 

  }

  rate:number=0;
  comment:string=''
  ratereset1:number=2;
  ratereset2:number=2;
  ratereset3:number=2;
  ratereset4:number=2;
  ratereset5:number=2;
  currentRate:number=3;
  color:any;
  token: any = localStorage.getItem("token")
  previousRate: any = {body: ""}

  

  ngOnInit(): void {
    this.calForm = this.formBuilder.group({
    comentario: ['', Validators.required]
    });

  }

  sendComment(data:any) {

    this.comment = this.calForm.value.comentario

    this.ratingService.postRatings(this.token, data).subscribe({
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
          timer: 3100,
          timerProgressBar: true,
          didOpen: (toast: any) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Necesitas calificar más poemas antes de poder publicar uno nuevo.'
        })
      }, complete: () => {
      }
    })
    
    
  }

  submit() {
  }
  

  resetStars() {

    var star1=document.getElementById("star-icon1")!;
    var star2=document.getElementById("star-icon2")!;
    var star3=document.getElementById("star-icon3")!;
    var star4=document.getElementById("star-icon4")!;
    var star5=document.getElementById("star-icon5")!;

    star1.style.color = '#d8d4d4'
    star2.style.color = '#d8d4d4'
    star3.style.color = '#d8d4d4'
    star4.style.color = '#d8d4d4'
    star5.style.color = '#d8d4d4'

    this.rate=0
    this.ratereset1=2
    this.ratereset2=2
    this.ratereset3=2
    this.ratereset4=2
    this.ratereset5=2
  }

  updateStarCount(value:string) {

    var star1=document.getElementById("star-icon1")!;
    var star2=document.getElementById("star-icon2")!;
    var star3=document.getElementById("star-icon3")!;
    var star4=document.getElementById("star-icon4")!;
    var star5=document.getElementById("star-icon5")!;

     if (value=='star5') {
      this.rate=5
      this.ratereset5-=1
      this.ratereset4=2
      this.ratereset3=2
      this.ratereset2=2
      this.ratereset1=2

      star1.style.color = 'orange'
      star2.style.color = 'orange'
      star3.style.color = 'orange'
      star4.style.color = 'orange'
      star5.style.color = 'orange'

      if (this.ratereset5==0) {
        this.resetStars()
      }
     }
     if (value=='star4') {
      this.rate=4
      this.ratereset4-=1
      this.ratereset3=2
      this.ratereset2=2
      this.ratereset1=2
      this.ratereset5=2

      star1.style.color = 'orange'
      star2.style.color = 'orange'
      star3.style.color = 'orange'
      star4.style.color = 'orange'
      star5.style.color = '#d8d4d4'

      if (this.ratereset4==0) {
        this.resetStars()
      }
     }
     if (value=='star3') {
      this.rate=3
      this.ratereset3-=1
      this.ratereset2=2
      this.ratereset1=2
      this.ratereset4=2
      this.ratereset5=2

      star1.style.color = 'orange'
      star2.style.color = 'orange'
      star3.style.color = 'orange'
      star4.style.color = '#d8d4d4'
      star5.style.color = '#d8d4d4'

      if (this.ratereset3==0) {
        this.resetStars()
      }
     }
     if (value=='star2') {
      this.rate=2
      this.ratereset2-=1
      this.ratereset1=2
      this.ratereset3=2
      this.ratereset4=2
      this.ratereset5=2

      star1.style.color = 'orange'
      star2.style.color = 'orange'
      star3.style.color = '#d8d4d4'
      star4.style.color = '#d8d4d4'
      star5.style.color = '#d8d4d4'

      if (this.ratereset2==0) {
        this.resetStars()
      }
     }
     if (value=='star1') {
      this.rate=1
      this.ratereset1-=1
      this.ratereset2=2
      this.ratereset3=2
      this.ratereset4=2
      this.ratereset5=2

      star1.style.color = 'orange'
      star2.style.color = '#d8d4d4'
      star3.style.color = '#d8d4d4'
      star4.style.color = '#d8d4d4'
      star5.style.color = '#d8d4d4'

      if (this.ratereset1==0) {
        this.resetStars()
      }
     }
     
  }
}
