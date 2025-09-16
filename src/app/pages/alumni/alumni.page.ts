import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule
import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonToolbar,
IonTitle, IonButtons, IonMenuButton, IonBackButton, IonCard, IonImg,
IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { peopleOutline, calendarOutline, bookOutline } from 'ionicons/icons';
@Component({
selector: 'app-alumni',
templateUrl: './alumni.page.html',
styleUrls: ['./alumni.page.scss'],
standalone: true,
imports: [RouterModule, IonCardContent, IonCardTitle, IonCardHeader, IonImg,
IonCard, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonToolbar,
IonTitle, IonButtons, IonMenuButton, IonBackButton]
})
export class AlumniPage {
icons = {
association: peopleOutline,
events: calendarOutline,
directory: bookOutline
};
constructor() {
addIcons(this.icons);
}
}
