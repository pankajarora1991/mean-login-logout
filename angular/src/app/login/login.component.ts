import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ToastService } from '../service/toast.service';

const invalidMessage = 'Alert! Invalid username or password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService,
        private toastService: ToastService,
    ) {}


    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['',  Validators.compose([
              Validators.required,
              Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$'),
            ])],
            password: ['',  Validators.compose([
              Validators.required,
              Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$'),
            ])]
        });
    }

    // get login form in HTML.
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // clear toast service.
        this.toastService.clear();

        // invalidation form check
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authService.login(this.f.username.value, this.f.password.value)
            .subscribe(
                data => {
                    if (!data.id) {
                      this.toastService.error(invalidMessage);
                      this.loading = false;
                    } else {
                      this.toastService.success('Successful login');
                      this.router.navigate(['/private']);
                    }

                },
                error => {
                  this.toastService.error(error);
                  this.loading = false;
                });
    }
}
