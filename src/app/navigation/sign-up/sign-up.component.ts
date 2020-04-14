import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  private checkoutForm;
  constructor(private formBuilder:FormBuilder) {

    this.checkoutForm = this.formBuilder.group({
      firstname: '',
      lastname: '',
      phonenumber:'',
      emailaddress:'',
      referencename:'',
      referenceemail:''
    });
   }

  ngOnInit() {
  }

}