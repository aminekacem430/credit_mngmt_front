import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { StorageService } from '../_services/storage.service'; 
import { ClientService } from '../_services/client.service';
import { TransactionService } from '../_services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],  
})
export class TransactionComponent implements OnInit {
  content?: string;
  public headers: string[] = ['date_transaction','total_credit','total_debit'];
  public dataSource: any = [];
  isLoggedIn = false; 
  currentclient :number=0


  constructor(private transService: TransactionService,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn(); 
    
    this.transService.getTransactionsByClient(this.currentclient).subscribe((data) => { 
      this.content = data;
      this.dataSource = JSON.parse( data); 
    })
 
    
  }
  checkDetails($event:any) {
    console.log("details transaction selected",$event)
  }
}
