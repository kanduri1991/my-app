import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  public accounts:any=[];
  public term:string = "";
  public column:string = "";
  public order:string = "";

  constructor(private _bankService:BankService, private router:Router) { 
    this._bankService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  ngOnInit(): void {
    
  }
  filter(){
  this._bankService.getFilteredAccounts(this.term).subscribe(
    (data:any)=>{
      this.accounts=data;
    },
    (err:any)=>{
      alert(" internal server error ")
    }
  )
  
  }
  sort(){
    this._bankService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error");
      }

      

    )
  }
  delete(id:any){
    this._bankService.deleteAccount(id).subscribe(
      (data:any)=>{
        alert("deleted sucessfully");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
   
  }
  view(id:string){
  this.router.navigateByUrl('/dashboard/bank-details/'+id);
  }

  }
