import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthorizationService } from '../../myServices/authorization.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customers;
 

  
  constructor(private service: AuthorizationService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((response) => {
      this.customers = response[1];
      console.log(this.customers);
    }, error => {
      console.log(error);
    });
  }
  

  statusUpdate(id, myboolean) {
    this.service.updateUsersStatus(id, myboolean)
      .subscribe(data => {
        console.log(data);
        this.customers = this.customers.map((element) => {
          if (element._id == id) {
            element.acountstatus = myboolean;
            console.log('From chang', myboolean);
          }
          return element;
        })
      })

  }
}
