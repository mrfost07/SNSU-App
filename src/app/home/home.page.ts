import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
IonBackButton,
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
// Add icons for IonIcon usage
addIcons({
school,
people,
book,
peopleCircle, // Keep this one, remove the duplicate
person,
flask,
library,
ribbon,
business,
});
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
    IonBackButton,   // 👈 ADD THIS
  ],
})
export class HomePage implements OnInit {
  constructor() {
      addIcons({school,people,book,peopleCircle,person,flask,library,ribbon,business});}
  ngOnInit() {}
  logout() {
    console.log('User logged out');
  }
}

