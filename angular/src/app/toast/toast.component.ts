import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastService } from '../service/toast.service';
import { Subscription } from 'rxjs';
import { Message } from '../data_model/message';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
})
export class ToastComponent implements OnInit {
  private subscription: Subscription;
  message: Message;
  styleClass: string;

  constructor(private toastService: ToastService) { }

  ngOnInit() {
      this.subscription = this.toastService.showToast()
          .subscribe(message => {
              if (message && message.success) {
                  this.styleClass = 'alert alert-success';
              } else {
                  this.styleClass = 'alert alert-danger';
              }

              this.message = message;
          });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
