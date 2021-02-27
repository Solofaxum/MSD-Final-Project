import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './home/login-component/login.component';
import { RegistrationComponentComponent } from './home/registration-component/registration-component.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { GuardsGuard } from './myServices/guards.guard';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },

  {
    path: 'farmers', 
    loadChildren: () => import('./farmers/farmers.module')
      .then(module => module.FarmersModule),canActivate:[GuardsGuard]
  },
  {
    path: 'products', 
    loadChildren: () => import('./products/products.module')
      .then(module => module.ProductsModule), canActivate: [GuardsGuard]

  },
  { path: 'register', component: RegistrationComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GuardsGuard]
})
export class AppRoutingModule { }
