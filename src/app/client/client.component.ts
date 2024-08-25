import { Component, OnInit } from '@angular/core'; 
import { StorageService } from '../_services/storage.service';
import { ClientService } from '../_services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class BoardUserComponent implements OnInit {
  form: any = {
    username: null, 
    password: null,
    tel:null,
    idadmin:null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = ''; 

  constructor(private storageService: StorageService,private router :Router,private authService: ClientService) { }

  ngOnInit(): void {
    if (!this.storageService.isLoggedIn()){
      this.router.navigate(['home'])
    } 
  }
  
  addClient(): void {
    const { username, password,tel,idadmin } = this.form;
 
    this.authService.addClient(username, username,tel,this.storageService.getUser().id).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
  
}
