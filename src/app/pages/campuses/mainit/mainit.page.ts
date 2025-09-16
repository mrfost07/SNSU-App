import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle,
IonCardHeader, IonCardContent, IonImg, IonButtons, IonBackButton, IonMenuButton }
from '@ionic/angular/standalone';
@Component({
selector: 'app-mainit',
templateUrl: './mainit.page.html',
styleUrls: ['./mainit.page.scss'],
standalone: true,
imports: [IonBackButton, IonButtons, IonImg, IonCardContent, IonCardHeader,
IonCardTitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
FormsModule, IonMenuButton]
})
export class MainitPage implements OnInit {
constructor() { }
ngOnInit() {
}
}
