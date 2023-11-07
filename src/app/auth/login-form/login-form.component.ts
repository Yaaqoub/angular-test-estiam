import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    onSubmit(): void {
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;

        this.authService.login(email, password).subscribe(
            (response) => {
                const token = response.access_token;

                this.authService.setToken(token);
            },
            (err) => {
                console.error('Login failed: ', err);
            }
        )
    }
}
