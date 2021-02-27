import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  constructor(private service: AuthorizationService,
    private route: Router) { }
  canActivate(): boolean {
    if (this.service.loggedIn()) {
      return true
    } else {
      this.route.navigate(['/login']);
      return false
    }
  }

}
