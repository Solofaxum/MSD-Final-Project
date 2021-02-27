import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from '../../myServices/authorization.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponentComponent implements OnInit {
  public myform;
  public isLoading = false;
  public token;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
 public subscribeListner: Subscription;
  constructor(
    private fb: FormBuilder,
    private service: AuthorizationService,
    private route: Router) {
    this.myform = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {  }


     // convenience getter for easy access to form fields
    // get f() { return this.myform.controls; }
  onSubmit() {
    const val = this.myform.value;


    if (val.email && val.password) {
      this.service.loginAuth(val.email, val.password)
        .subscribe((data: any) => {
          if (data.success == true) {
            this.service.setToken(data.token);
            this.route.navigate(['products','lists']);
          }
          console.log(data);

        })
    }
  }
 
  // ngOnDestroy() {
  //   this.subscribeListner.unsubscribe();
  // }
}
