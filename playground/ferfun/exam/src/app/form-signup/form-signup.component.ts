import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, FormControl, ReactiveFormsModule} from "@angular/forms";
import {confirmPassword} from "./confirmPassword";

@Component({
  selector: 'form-signup',
  templateUrl: './form-signup.component.html',
  styleUrls: ['./form-signup.component.css']
})

export class FormSignupComponent {

  signup = {};
  
      confirm = new FormControl('', [confirmPassword.bind(undefined, this.signup)]);
  
      signUp() {
          console.log("Sign Up Data:" , this.signup);
      }
}
