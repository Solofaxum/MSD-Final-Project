import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FarmerService } from '../../myServices/product.service';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public subscribeListner: Subscription;
  private product$;
  public myForm;
  public uploadImage;

 

  constructor(private formBuilder: FormBuilder, 
    private service: FarmerService,
    private router: Router 
    ) {
      this.product$=this.router.getCurrentNavigation().extras.state.myList;
      console.log(this.product$);
      
      // Create FormGroup
    this.myForm = this.formBuilder.group({
      'title': [this.product$.title, Validators.required],
      'price': [this.product$.price, Validators.required],
      'describtion': [this.product$.description, Validators.required],
      'image': [this.product$.image]
    });
  }

  ngOnInit():void {  }
 
  onSubmit() {
    this.service.updateProducts(this.product$._id, this.myForm.value)
    .subscribe((data:any) => {
      console.log(data);
       setTimeout(() => {
        this.router.navigate(['/products', 'lists']);
        }, 2000);
      });
      alert('updated successfully!')
     
    }

    onClick(event) {
      if (event.target.files.length > 0) {
        this.uploadImage = event.target.files[0];
      
      }
    }
    
  // ngOnDestroy() {
  //   this.subscribeListner.unsubscribe();
  // }
  }

