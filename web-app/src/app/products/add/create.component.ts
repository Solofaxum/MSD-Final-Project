import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FarmerService } from '../../myServices/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit { 
  subscribeListner: Subscription;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;
  myForm;
  wordcounter = 0;
 uploadImage;

  constructor(private fb: FormBuilder,
    private service: FarmerService,
    private route: Router,
    private router: ActivatedRoute,) {

  }

  get f() {
    return this.myForm.controls;
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.isAddMode = !this.id;


    this.myForm = this.fb.group({
      'farmname': ['', Validators.required],
      'title': ['', Validators.required],
      'price': ['', Validators.required],
      'describtion': ['', Validators.required],
      'image': ['']
    });

  }

  onClick(event) {
    
    
    if (event.target.files.length > 0) {
      this.uploadImage = event.target.files[0];
      // const file = event.target.files[0];
      // this.myForm.patchValue({
      //   uploadImage: file
      // });
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('farmname', this.myForm.get('farmname').value)
    formData.append('title', this.myForm.get('title').value)
    formData.append('price', this.myForm.get('price').value)
    formData.append('describtion', this.myForm.get('describtion').value)
    formData.append('image', this.uploadImage);

    console.log(formData);
    
    // const val = this.myForm.value;

    this.service.createProducts(formData).subscribe((data: any) => {
      console.log(data);
      this.route.navigate(['products','lists']);
    })

  }

  // ngOnDestroy() {
  //   this.subscribeListner.unsubscribe();
  // }
}
