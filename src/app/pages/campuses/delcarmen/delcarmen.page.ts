import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonBackButton,
  IonButtons,
  IonMenuButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-delcarmen',
  templateUrl: './delcarmen.page.html',
  styleUrls: ['./delcarmen.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonBackButton,
    IonImg,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonMenuButton
  ]
})
export class DelcarmenPage implements OnInit {
  constructor() { }

  ngOnInit() { }
}
