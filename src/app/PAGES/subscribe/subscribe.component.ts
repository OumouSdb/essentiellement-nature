import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, UserRole } from '../../Models/user';
import { UsersService } from '../../Services/users.service';
import { signupConstraint } from 'src/app/signup.constraint';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  user = new User();
  userToSave = new User();

  constructor(private userService: UsersService) { }

  subForm = new FormGroup({
    lastName: new FormControl("", [
      Validators.required,
    ]),
    firstname: new FormControl("", [
      Validators.required,
    ]),
    age: new FormControl("", [
      Validators.required,
    ]),
    sexe: new FormControl("", [
      Validators.required,
    ]),
    email: new FormControl("", [
      Validators.required,
    ]),
    pass: new FormControl("", [
      Validators.required,
    ]),
    confirmPass: new FormControl("", [
      Validators.required
    ]),
  })

  ngOnInit(): void {
    // if (this.user != null) {
    //   this.userService.save(this.user).subscribe((result) => {
    //     this.subForm = new FormGroup({
    //       lastName: new FormControl(""),
    //       firstname: new FormControl(""),
    //       age: new FormControl(""),
    //       sexe: new FormControl(""),
    //       email: new FormControl(""),
    //       pass: new FormControl(""),
    //       confirmPass: new FormControl(""),
    //     })
    //   })

    // }
  }

  public validate(name: string): string | null {
    const field = this.subForm?.get(name);

    // @ts-ignore
    const validators = signupConstraint[name];
    if (field?.touched) {
      for (let validator in validators) {
        if (field?.hasError(validator)) {
          return validators[validator];
        }
      }
    }

    return null;
  }

  onSubmit() {
    this.subForm.markAllAsTouched();

    if (this.subForm.valid) {

      if (this.userToSave !== undefined && this.userToSave !== null) {
        let userToSave = new User();
        this.userToSave.id = 0;
        this.userToSave.firstname = this.subForm.get('firstname')?.value ?? "unknown firstname";
        this.userToSave.lastName = this.subForm.get('lastName')?.value ?? "unknown lastname";
        this.userToSave.age = Number(this.subForm.get('age')?.value) ?? 0;
        this.userToSave.email = this.subForm.get('email')?.value ?? "unknown email";
        this.userToSave.sexe = this.subForm.get('sexe')?.value ?? "unknown gender";
        this.userToSave.password = this.subForm.get('pass')?.value ?? "unknown password";
        this.userToSave.role = UserRole.ADMIN;
        this.userToSave.version = 0;

        //  console.log(userToSave.firstname);
        //   console.log(this.userToSave.lastName);
        //  console.log(userToSave.sexe);
        //   console.log(userToSave.password);
        //   console.log(userToSave.email);
        //console.log(this.userToSave );

        this.userService.save(this.userToSave).subscribe(result => {

          console.log(userToSave);

        })
      }
    }
  }


}
