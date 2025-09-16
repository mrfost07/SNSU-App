import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule
import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonToolbar, IonTitle, IonButtons,
IonMenuButton, IonBackButton, IonCardHeader, IonCardContent, IonImg, IonCard, IonCardTitle } from
'@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { libraryOutline, bookOutline, globeOutline } from 'ionicons/icons';
@Component({
selector: 'app-library',
templateUrl: './library.page.html',
styleUrls: ['./library.page.scss'],
standalone: true,
imports: [RouterModule, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList,
IonToolbar, IonTitle, IonButtons, IonMenuButton, IonBackButton, IonCardHeader, IonCardContent, IonImg,
IonCard]
})
export class LibraryPage {
icons = {
home: libraryOutline,
opac: bookOutline,
remote: globeOutline
};
constructor() {
addIcons(this.icons);
}
}