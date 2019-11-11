import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastService } from '../service/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html'
})
export class PrivateComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router) { }

  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.toastService.success('Successful logout');
    this.router.navigate(['/login']);
  }

}
