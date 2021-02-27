import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthorizationService } from '../myServices/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class FrontComponent implements OnInit, DoCheck {
  // @Input() name: string;
  public token
  public user;
  public farmerAuth = false;
  public subscribeListner: Subscription;
  
  constructor(
    private service: AuthorizationService,
    private router: Router) { }

  ngDoCheck(): void {
    this.token = this.service.token
  }
  
  ngOnInit(): void {
    this.token = this.service.token
  }
  onLogout() {
    this.service.logout();
    this.router.navigate(['/login']);
 }

  // ngOnDestroy() {
  //   this.subscribeListner.unsubscribe();
  // }

}



