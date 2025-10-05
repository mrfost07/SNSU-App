import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// ✅ Import needed Ionic components
import {
  IonContent,
  IonItem,
  IonIcon,
  IonButton,
  IonText,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { lockClosedOutline, personOutline, mailOutline } from 'ionicons/icons';

// ✅ Register icons once
addIcons({ lockClosedOutline, personOutline, mailOutline });

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonIcon,
    IonInput,   // ✅ Needed for <ion-input>
    IonButton,
    IonText,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SignupPage {
  full_name = '';
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    if (!this.full_name || !this.email || !this.password) {
      alert('Please fill in all fields');
      return;
    }

    this.http.post('http://localhost/devapp/register.php', {
      full_name: this.full_name,
      email: this.email,
      password: this.password
    }).subscribe(
      (response: any) => {
        if (response.success) {
          alert(response.message);
          this.router.navigate(['/login']);
        } else {
          alert(response.message);
        }
      },
      (error) => {
        alert('Registration failed. Please try again later.');
        console.error(error);
      }
    );
  }
}
