import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/myServices/authorization.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-farmers',
  templateUrl: './update-customers.component.html',
  styleUrls: ['./update-customers.component.css']
})
export class UpdateCustomersComponent implements OnInit {
  // private subs:Subscription;
  public customers;
  public myForm;



  constructor(
    private formBuilder: FormBuilder,
    private service: AuthorizationService,
    private router: Router
  ) {
    this.customers = this.router.getCurrentNavigation().extras.state.myList;
    console.log(this.customers);

    // Create FormGroup
    this.myForm = this.formBuilder.group({
      'firstname': [this.customers.firstname, Validators.required],
      'lastname': [this.customers.lastname, Validators.required],
      'email': [this.customers.email, Validators.required],
      'password': [this.customers.password, Validators.required]
    });
  }

  ngOnInit(): void {  }


  onSubmit() {
    this.service.updateCustomersInfo(this.customers._id, this.myForm.value)
      .subscribe((data:any) => {
        console.log(data);
         setTimeout(() => {
          this.router.navigate(['/farmers', 'customerlists']);
          }, 2000);
        });
        alert('updated successfully!')
       
      }

  
}
