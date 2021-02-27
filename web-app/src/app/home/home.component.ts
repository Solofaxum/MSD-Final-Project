import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../myServices/authorization.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public farmAuth = false;
  // public subscribeListner: Subscription;
  constructor(private service: AuthorizationService) {}

  ngOnInit(): void {
    // this.farmAuth = this.service.isAuthenticate();
    // this.subscribeListner = this.service
    //   .getAuthStatusListener()
    //   .subscribe(response => {
    //     this.farmAuth = response;
    //   });
  }

  // onLogout() {
  //   this.service.isLoggedOut();
  // }

  // ngOnDestroy() {
  //   this.subscribeListner.unsubscribe();
  // }

}
