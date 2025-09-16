import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
IonImg, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonMenuButton }
from '@ionic/angular/standalone';
@Component({
selector: 'app-malimono',
templateUrl: './malimono.page.html',
styleUrls: ['./malimono.page.scss'],
standalone: true,
imports: [IonCardTitle, IonCardContent, IonCardHeader, IonCard, IonImg,
IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar,
CommonModule, FormsModule, IonMenuButton]
})
export class MalimonoPage implements OnInit {
constructor() { }
ngOnInit() {
}
}