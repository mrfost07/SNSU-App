import { Component } from '@angular/core';
import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonToolbar, IonTitle, IonButtons,
IonMenuButton, IonBackButton, IonCardTitle, IonCardHeader, IonCardContent, IonImg, IonCard } from
'@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { documentTextOutline, peopleOutline, bookOutline, schoolOutline, businessOutline, podiumOutline }
from 'ionicons/icons';
@Component({
selector: 'app-rie',
templateUrl: './rie.page.html',
styleUrls: ['./rie.page.scss'],
standalone: true,
imports: [IonCard, IonImg, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList,
IonToolbar, IonTitle, IonButtons, IonMenuButton, IonBackButton,IonCardHeader, IonCardTitle,
IonCardContent]
})
export class RiePage {
icons = {
journal: documentTextOutline,
research: bookOutline,
manual: schoolOutline,
milestone: businessOutline,
cmd: podiumOutline,
extension: peopleOutline
};
constructor() {
addIcons(this.icons);
}
}
