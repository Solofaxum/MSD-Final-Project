/**Imported liabreries */
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Subject} from 'rxjs';
import { Router } from '@angular/router';
import { map } from "rxjs/operators"
import * as _ from 'lodash';

/**user login interface */
interface IUser {
  email: String,
  password: String,
  status: boolean
}

/**main service decorator */
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
 
  public data = 'http://localhost:7000';
  private isAuthenticated = false;
  public statusListener = new Subject<boolean>();
  public token;
  public tokenTimer: any;
  public isAutho = true;

  /**consuming Rest API and setting token  */
  constructor(private router: Router,
    private _http: HttpClient) {
    this.token = localStorage.getItem('token');
     }


  /**Sign up  */
  SignUp(farmname, fullname, email, password) {
    return this._http.post<IUser>(`${this.data}/api/farmers/signup`, {
      farmname,
      fullname,
      email,
      password
    });
  }

  /**Login and Autorization  */
  loginAuth(email: IUser, password: IUser) {
    return this._http.post<IUser>(`${this.data}/api/farmers/login`, {
      email: email, password: password
    })
  }

  /**Get All Farmers  */
  getFarmers() {
    return this._http.get<IUser>(`${this.data}/api/farmers/admins`,
      { headers: { Authorization: "Bearer " + this.token } })
      .pipe(map(data => _.values(data)));
  }

    /**Get All Farmers  */
    getUsers() {
      return this._http.get<IUser>(`${this.data}/api/customers/admins`,
        { headers: { Authorization: "Bearer " + this.token } })
        .pipe(map(data => _.values(data)));
    }

  
  /** geting the saved token*/
  getToken() {
    return of(this.token);
  }

  /**setting token in local storage*/
  setToken(token: any) {
    localStorage.setItem('token', token)
    this.token = token
  }


  /**a boolean type used to confirm authenticated users */
  isAuthenticate() {
    return this.isAutho;
  }

  /**geting the boolean value of the listner */
  getAuthStatusListener() {
    return this.statusListener.asObservable();
  }
  
  getIsAuth() {
    return this.isAuthenticated;
  }

  /**user logout, removing token and change to fron navigator */
  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.statusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.removeToken();
    this.router.navigate(["/"]);
  }
  private removeToken() {
    localStorage.removeItem("token");
  }
  loggedIn() {
    return !!localStorage.getItem('token')
  }
  
/**Login and Autorization  */
updateFarmersInfo(id, farmer) {
  return this._http.patch<IUser>(`${this.data}/api/farmers/admins`,
    { id: id, farmer: farmer },
    { headers: { Authorization: "Bearer " + this.token } })
    .pipe(map(data => _.values(data)));
}

/**update customer info  */
updateCustomersInfo(id, farmer) {
  return this._http.patch<IUser>(`${this.data}/api/customers/admins`,
    { id: id, farmer: farmer },
    { headers: { Authorization: "Bearer " + this.token } })
    .pipe(map(data => _.values(data)));
}

/**update account status  */
  updateAccountStatus(id, myboolean) {
    return this._http.patch<IUser>(`${this.data}/api/farmers/admins`,
      { id: id, myboolean: myboolean },
      { headers: { Authorization: "Bearer " + this.token } })
      .pipe(map(data => _.values(data)));
  }

  
  updateUsersStatus(id, myboolean) {
    return this._http.patch<IUser>(`${this.data}/api/customers/admins`,
      { id: id, myboolean: myboolean },
      { headers: { Authorization: "Bearer " + this.token } })
      .pipe(map(data => _.values(data)));
  }

}

