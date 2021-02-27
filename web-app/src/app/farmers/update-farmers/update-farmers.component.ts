import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/myServices/authorization.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-farmers',
  templateUrl: './update-farmers.component.html',
  styleUrls: ['./update-farmers.component.css']
})
export class UpdateFarmersComponent implements OnInit {
  // private subs:Subscription;
  public farmers;
  public myForm;



  constructor(
    private formBuilder: FormBuilder,
    private service: AuthorizationService,
    private router: Router
  ) {
    this.farmers = this.router.getCurrentNavigation().extras.state.myList;
    console.log(this.farmers);

    // Create FormGroup
    this.myForm = this.formBuilder.group({
      'farmname': [this.farmers.farmname, Validators.required],
      'fullname': [this.farmers.fullname, Validators.required],
      'email': [this.farmers.email, Validators.required],
      'password': [this.farmers.password, Validators.required]
    });
  }

  ngOnInit(): void {  }


  onSubmit() {
    this.service.updateFarmersInfo(this.farmers._id, this.myForm.value)
      .subscribe((data:any) => {
        console.log(data);
         setTimeout(() => {
          this.router.navigate(['/farmers', 'lists']);
          }, 2000);
        });
        alert('updated successfully!')
       
      }

  
}
