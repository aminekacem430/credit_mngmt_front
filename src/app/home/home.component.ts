import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { StorageService } from '../_services/storage.service'; 
import { ClientService } from '../_services/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],  
})
export class HomeComponent implements OnInit {
  content?: string;
  public headers: string[] = ['nom_client','total_credit','total_debit','restant_a_paye'];
  public dataSource: any = [];
  isLoggedIn = false; 


  constructor(private userService: ClientService,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn(); 
    
    this.userService.getAllClients().subscribe((data) => {
      // this.userService.getClientsByAdmin(this.storageService.getUser().id).subscribe((data) => {
      this.content = data;
      this.dataSource = JSON.parse( data); 
    })
 
    ///
    // this.userService.getPublicContent().subscribe({
    //   next: data => {
    //     this.content = data;
    //   },
    //   error: err => {
    //     if (err.error) {
    //       try {
    //         const res = JSON.parse(err.error);
    //         this.content = res.message;
    //       } catch {
    //         this.content = `Error with status: ${err.status} - ${err.statusText}`;
    //       }
    //     } else {
    //       this.content = `Error with status: ${err.status}`;
    //     }
    //   }
    // });
  }
  checkClient($event:any) {
    console.log("checkClient",$event)
  }
}
