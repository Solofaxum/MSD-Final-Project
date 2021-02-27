import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './list/list.component';

import { FarmerService } from '../myServices/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { EditProductComponent } from './edit/edit-product.component';
import { CreateComponent } from './add/create.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  
  { path: 'posts', component: CreateComponent },
  { path: 'edit', component: EditProductComponent },
  { path: 'lists', component: ProductListComponent },
  { path: 'orders', component: OrdersComponent }
];

@NgModule({
  declarations: [CreateComponent, ProductListComponent, EditProductComponent, OrdersComponent],
  imports: [
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [CreateComponent, ProductListComponent, EditProductComponent, OrdersComponent],
  providers: [
    FarmerService
  ]
})
export class ProductsModule { }
