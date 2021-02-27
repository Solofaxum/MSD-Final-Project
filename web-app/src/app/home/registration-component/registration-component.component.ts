import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/myServices/authorization.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {
  public myForm: FormGroup;
  public loading = false;
  public submitted = false;
  public token;
  public subscribeListner: Subscription;
  constructor(private service: AuthorizationService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      farmname: ['', Validators.required],
      fullname: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.myForm.value)
    this.service.SignUp(
      this.myForm.value.farmname,
      this.myForm.value.fullname,
      this.myForm.value.email,
      this.myForm.value.password).subscribe((data => {
        console.log(data);
      }))
      this.router.navigate(['','/login'])
    this.myForm.reset();
  }

  // ngOnDestroy() {
  //   this.subscribeListner.unsubscribe();
  // }
}
