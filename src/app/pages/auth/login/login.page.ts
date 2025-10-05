import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonItem,
  IonIcon,
  IonCheckbox,
  IonButton,
  IonText,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { lockClosedOutline, personOutline, mailOutline } from 'ionicons/icons';

addIcons({
  lockClosedOutline,
  personOutline,
  mailOutline
});

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonTitle,
    IonToolbar,
    IonHeader,
    IonContent,
    IonItem,
    IonIcon,
    IonCheckbox,
    IonButton,
    IonText,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class LoginPage {
  email = '';
  password = '';
  rememberMe = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      this.email = savedEmail;
      this.rememberMe = true;
    }
  }

  login() {
    if (!this.email || !this.password) {
      alert('Please enter both email and password');
      return;
    }

    this.http.post('http://localhost/devapp/login.php', {
      email: this.email,
      password: this.password
    }).subscribe(
      (response: any) => {
        console.log('Server Response:', response); // 🔍 Debug log

        if (response.success) {
          // Save Remember Me
          if (this.rememberMe) {
            localStorage.setItem('rememberedEmail', this.email);
          } else {
            localStorage.removeItem('rememberedEmail');
          }

          alert(response.message);
          this.router.navigate(['/home']);
        } else {
          alert(response.message || 'Invalid login credentials');
        }
      },
      (error) => {
        console.error('Login error:', error);
        alert('Login Failed. Please check your connection or try again later.');
      }
    );
  }

  forgotPassword() {
    alert('Forgot password feature coming soon.');
  }
}
