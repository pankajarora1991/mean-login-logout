import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from '../data_model/message';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private subject = new Subject<Message>();
  constructor() {}

  showToast(): Observable<Message> {
      return this.subject.asObservable();
  }

  success(message: string) {
      this.subject.next({ success: true, errorMessage: message });
  }

  error(message: string) {
      this.subject.next({ success: false, errorMessage: message });
  }

  clear() {
      this.subject.next();
  }
}
