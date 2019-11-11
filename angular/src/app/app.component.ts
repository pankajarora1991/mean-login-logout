import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { User } from './data_model/user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // current url.
  user = new User();

  constructor(
    private router: Router,
    private authservice: AuthService
  ) {
    this.authservice.currentUserSub.subscribe((value) => {
      // delay to show changes in UI.
      setTimeout(() => this.user = value, 1000);
    });
  }
}
