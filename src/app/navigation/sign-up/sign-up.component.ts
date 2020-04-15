import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  private signupForm;
  constructor(private formBuilder:FormBuilder) {

    this.signupForm = this.formBuilder.group({
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
  async onSubmit(){
    let req: XMLHttpRequest = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          window.alert(this.responseText);
        }
    };
    req.open(
      "PUT", 
    " https://usqjxreayc.execute-api.us-east-1.amazonaws.com/Production/applications",
    true
    );
    req.send(JSON.stringify(this.signupForm.value));
  }

}