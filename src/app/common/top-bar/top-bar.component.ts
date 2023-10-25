import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

    constructor(private router: Router) {
    }

    navigateToHome() {
        this.router.navigate(['/']);
    }

    navigateToUsers() {
        this.router.navigate(['/users']);
    }

    navigateToPosts() {
        this.router.navigate(['/posts']);
    }
}
