import { NotificationService } from './notification.service'
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgxSpinnerService } from "ngx-spinner";
import {APIServicesService} from '../api-services.service'
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-client';
  constructor(
    private serv:APIServicesService,
    private notifyService : NotificationService,
    private spinner: NgxSpinnerService) { }
  
  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 800);
  }

  showToasterSuccess(){
      this.notifyService.showSuccess("Data shown successfully !!", "tutsmake.com")
  }
  
  showToasterError(){
      this.notifyService.showError("Something is wrong", "tutsmake.com")
  }
  
  showToasterInfo(){
      this.notifyService.showInfo("This is info", "tutsmake.com")
  }
  
  showToasterWarning(){
      this.notifyService.showWarning("This is warning", "tutsmake.com")
  }
  simpleAlert(){
    Swal.fire('Hello world!');
  }
   
  alertWithSuccess(){
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
  }
  alertWithError(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
  SweetToastr(){
    Swal.fire({
      position: 'top-end',
      title: 'Title',
      html:'<p>Message</p>',
      showConfirmButton: false,
      timerProgressBar:true,
      timer: 1500
    })
  }
  confirmBox(){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  APITesting(){
    this.serv.API_GETTesting('https://localhost:44371/api/APITest/','TestGet').subscribe((response: any) => {
      alert(" Get OK");
    });
    this.serv.API_POSTTesting('https://localhost:44371/api/APITest/', 'TestMethod', {
      'name':'done'
    }).subscribe((response: any) => {
      alert(" Post OK");
    });

  }
}
