import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FarmerService } from 'src/app/myServices/product.service';
import { Subscription } from 'rxjs';

interface ITypes {
  name: String;
  email: String;
  prodId: string;
  quantity: Number;
  unitprice: Number;
  totalprice: Number;
  status: String;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})


export class OrdersComponent implements OnInit {
  subscribeListner: Subscription;
  displayedColumns: string[] = ['customerId', 'customerEmail', 'status', 'statuschange'];
  result;
  

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private service: FarmerService) { }
  ngOnInit() {
    this.service.getOrders()
      .subscribe((response) => {
        console.log(response);
        this.result = response[1];
        console.log(this.result);
      }, error => {
        console.log(error);
      });
    
  }


  statusOneUpdate(status, orderId) {
     status = 'raedy';
    this.service.updateOrders(status, orderId).subscribe(data => {
      console.log(data);
    })
  }

  statusTwoUpdate(status, orderId) {
    status = 'completed';
    this.service.updateOrders(status, orderId).subscribe(result => {
      console.log(result);
    })
  }

  // ngOnDestroy() {
  //   this.subscribeListner.unsubscribe();
  // }
}
