import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonButtons 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html', // 👈 HTML goes here, not inside TS
  styleUrls: ['./logout.page.scss'],
  standalone: true,
  imports: [
    IonButtons, 
    IonButton,
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule
  ]
})
export class LogoutPage {
  constructor(private router: Router) {}

  logout() {
    // ✅ Clear stored user data
    localStorage.removeItem('user');
    localStorage.removeItem('rememberedEmail');

    alert('You have been logged out.');

    // ✅ Redirect to Login Page
    this.router.navigateByUrl('/auth/login', { replaceUrl: true });
  }
}
