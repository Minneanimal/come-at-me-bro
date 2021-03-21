import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registrationForm = this.fb.group({
    username: ['', [Validators.required, Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(private authService: AuthenticationService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  createNewUser() {
    this.authService.signUp(this.email.value, this.password.value).subscribe(
      () => this.router.navigate(['tabs/account'])
    )
  }

  get username() { return this.registrationForm.get('username')}
  get email() { return this.registrationForm.get('email')}
  get password() { return this.registrationForm.get('password')}

}
