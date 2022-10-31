import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { PowerComponent } from './power/power.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { GpayComponent } from './gpay/gpay.component';
import { BankComponent } from './bank/bank.component';
import { HttpClientModule } from '@angular/common/http';
import { MailComponent } from './mail/mail.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CreateAacountComponent } from './create-aacount/create-aacount.component';
import { CreateUserComponent } from './create-user/create-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    CalculatorComponent,
    InterpolationComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    RectangleComponent,
    SquareComponent,
    PowerComponent,
    EventRegistrationComponent,
    EmployeeRegistrationComponent,
    GpayComponent,
    BankComponent,
    MailComponent,
    BankDetailsComponent,
    VehicleComponent,
    CreateAacountComponent,
    CreateUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
