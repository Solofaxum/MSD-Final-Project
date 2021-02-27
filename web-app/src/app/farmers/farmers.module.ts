import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FarmersListComponent } from './list-farmers/farmer-list.component';
import { UpdateFarmersComponent } from './update-farmers/update-farmers.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './list-customers/customers.component';
import { UpdateCustomersComponent } from './update-customers/update-customers.component';

const routes: Routes = [
  { path: 'farmerlists', component: FarmersListComponent },
  { path: 'editpassword', component: UpdateFarmersComponent },
  { path: 'customerlists', component: CustomersComponent },
  { path: 'editUser', component: UpdateCustomersComponent }
];

@NgModule({
  declarations: [UpdateCustomersComponent, UpdateFarmersComponent, CustomersComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FarmersModule { }
