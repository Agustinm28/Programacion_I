import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RatingService } from 'src/app/services/rating.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  reviewForm!: FormGroup;
  private routeSub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ratingService: RatingService,
    private route: ActivatedRoute
    ) { 
  }

  poemId: number = 0;
  score: number = 0;
  ratereset1: number = 2;
  ratereset2: number = 2;
  ratereset3: number = 2;
  ratereset4: number = 2;
  ratereset5: number = 2;
  color: any;
  token: any = localStorage.getItem("token")

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.poemId = (params['poemId'])
    });
    this.reviewForm = this.formBuilder.group({
    comment: ['', Validators.required],
    });
  }

  postReview(data: any) {
    this.ratingService.postRatings(this.token, data).subscribe({
      next: (response: any) => {
        const Toast = Swal.mixin({
          toast: true,
          showConfirmButton: false,
          position: 'bottom-end',
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast: any) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Tu comentario se ha publicado exitosamente.',
        })
        window.location.reload()
      }, error: (error) =>{
        const Toast = Swal.mixin({
          toast: true,
          showConfirmButton: false,
          position: 'bottom-end',
          timer: 3200,
          timerProgressBar: true,
          didOpen: (toast: any) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Este poema ya ha sido calificado o te pertenece.'
        })
      }, complete: () => {
      }
      }
    )
  }

  submit() {
    if (!this.reviewForm.valid) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast: any) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Faltan campos por completar.'
      })

      return
    }
  else if (this.score == 0) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast: any) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'No se ha agregado una calificación (estrellas).'
      })

      return
    }
    let comment = this.reviewForm.value.comment
    let rating = this.score
    this.postReview({
      poem_id: this.poemId,
      body: comment,
      rating: rating
    })
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

    this.score = 0
    this.ratereset1 = 2
    this.ratereset2 = 2
    this.ratereset3 = 2
    this.ratereset4 = 2
    this.ratereset5 = 2
  }

  updateStarCount(value:string) {
    var star1=document.getElementById("star-icon1")!;
    var star2=document.getElementById("star-icon2")!;
    var star3=document.getElementById("star-icon3")!;
    var star4=document.getElementById("star-icon4")!;
    var star5=document.getElementById("star-icon5")!;

     if (value=='star5') {
      this.score = 5
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
      this.score = 4
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
      this.score = 3
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
      this.score = 2
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
      this.score = 1
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
