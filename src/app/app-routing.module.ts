import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CreateAacountComponent } from './create-aacount/create-aacount.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { GpayComponent } from './gpay/gpay.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PowerComponent } from './power/power.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';

import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate:[AuthGuard], children:[
    {path:'calculator', component:CalculatorComponent},
    {path: 'interpolation', component:InterpolationComponent},
    {path: 'eventbinding', component:EventbindingComponent},
    {path: 'twowaybinding', component:TwowaybindingComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'square',component:SquareComponent},
    {path:'power',component:PowerComponent},
    {path:'event-registration',component:EventRegistrationComponent, canDeactivate:[NotifyGuard]},
    {path:'Employee-Registration',component:EmployeeRegistrationComponent, canDeactivate:[NotifyGuard]},
    {path:'gpay',component:GpayComponent},
    {path:'bank',component:BankComponent},
    {path:'mail',component:MailComponent},
    {path:'bank-details/:id',component:BankDetailsComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'create-account',component:CreateAacountComponent, canDeactivate:[NotifyGuard]},
    {path:'create-user',component:CreateUserComponent}
  ]},
  {path: '', component:LoginComponent},
  {path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
