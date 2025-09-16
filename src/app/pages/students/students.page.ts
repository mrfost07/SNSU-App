import { Component } from '@angular/core';
import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonToolbar, IonTitle, IonButtons,
IonMenuButton, IonBackButton, IonImg,IonCard, IonCardHeader, IonCardTitle, IonCardContent } from
'@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { schoolOutline, peopleOutline, shieldCheckmarkOutline, layersOutline, cashOutline, ribbonOutline,
bookOutline, documentTextOutline, } from 'ionicons/icons';
@Component({
selector: 'app-students',
templateUrl: './students.page.html',
styleUrls: ['./students.page.scss'],
standalone: true,
imports: [IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonToolbar, IonTitle, IonButtons,
IonMenuButton, IonBackButton, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardContent]
})
export class StudentsPage {
icons = {
admission: schoolOutline,
services: peopleOutline,
ssc: shieldCheckmarkOutline,
organizations: layersOutline,
scholarships: cashOutline,
deansLister: ribbonOutline,
handbook: bookOutline,
policies: documentTextOutline
};
constructor() {
// ✅ Register icons to avoid missing icon warnings
addIcons({
schoolOutline,
peopleOutline,
shieldCheckmarkOutline,
layersOutline,
cashOutline,
ribbonOutline,
bookOutline,
documentTextOutline
});
}
}
