import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class IntAuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(request, next){
   
    const AuthToken = this.injector.get(AuthorizationService);
    const sendRequest = request.clone({setHeaders:{
      Authorization: `Bearer ${AuthToken.getToken()}`
    }
     // headers: request.headers.set("Authorization", "Bearer " + getToken)  // +getToken
    });
    return next.handle(sendRequest);
  }
}
