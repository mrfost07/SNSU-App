import { register } from 'swiper/element/bundle';
register();

import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonImg,
  IonButton,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  school,
  people,
  book,
  peopleCircle,
  person,
  flask,
  library,
  ribbon,
  business,
} from 'ionicons/icons';

// ✅ Register Ionic icons
addIcons({ school, people, book, peopleCircle, person, flask, library, ribbon, business });

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    RouterModule,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonButton,
    IonImg,
    IonIcon,
    IonCol,
    IonRow,
    IonGrid,
    IonCard,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonMenuButton,
  ],
  // ✅ Allow use of Web Components like <swiper-container>
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit, OnDestroy {
  private socket: WebSocket | null = null;
  private username: string | null = null;

  constructor(private router: Router) {
      addIcons({school,people,book,peopleCircle,person,flask,library,ribbon,business});}

  ngOnInit() {
    this.username = localStorage.getItem('username') || 'Guest';
    this.connectWebSocket();
  }

  ngOnDestroy() {
    this.disconnectWebSocket();
  }

  // ✅ WebSocket connection
  private connectWebSocket() {
    this.socket = new WebSocket('ws://localhost:8080');

    this.socket.onopen = () => {
      console.log('🟢 WebSocket connected');
      this.socket?.send(
        JSON.stringify({
          type: 'login',
          username: this.username,
        })
      );
    };

    this.socket.onmessage = (event) => {
      console.log('📨 Message from server:', event.data);
    };

    this.socket.onerror = (error) => {
      console.error('❌ WebSocket error:', error);
    };

    this.socket.onclose = () => {
      console.log('🔌 WebSocket disconnected');
    };
  }

  // ✅ WebSocket disconnection
  private disconnectWebSocket() {
    if (this.socket) {
      if (this.username) {
        this.socket.send(
          JSON.stringify({
            type: 'logout',
            username: this.username,
          })
        );
      }
      this.socket.close();
      this.socket = null;
      console.log('🔴 WebSocket manually closed');
    }
  }

  // ✅ Logout
  logout() {
    console.log('🚪 Logging out user...');
    this.disconnectWebSocket();
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
    setTimeout(() => {
      alert('You have been logged out successfully.');
    }, 300);
  }
}
