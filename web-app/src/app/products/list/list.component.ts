import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../../myServices/product.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

interface IProduct {
  farmname: String,
  title: String,
  price: number,
  description: String,
  image: String
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ProductListComponent implements OnInit {
  public subscribeListner: Subscription;
  searchResults: Array<IProduct>;
  query: string;
  public title = "Our Product List";
  public products;

  constructor(private service: FarmerService, private route: Router) {

  }

  ngOnInit(): void {
    this.service.getProducts()
      .subscribe((response) => {
        console.log(response);
        this.products = response[1];

      }, error => {
        console.log(error);
      });
  }

  deleteMyProduct(id: number) {
    if (confirm("Are you sure you want to delete " + id + "?")) {
      return this.service.deleteProduct(id).subscribe(
        data => {
          alert('Successfully Deleted!')
          this.route.navigate(['/products', 'lists'])
        }
      );

    }
    
  }

  search(): void {
    this.service.getProducts().subscribe(
      data => { this.searchResults = data[1]; },
      error => console.log(error)
    );
  }

  // ngOnDestroy() {
  //   this.subscribeListner.unsubscribe();
  // }

}
