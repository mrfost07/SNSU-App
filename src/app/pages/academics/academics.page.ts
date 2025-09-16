import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule
import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonToolbar, IonTitle, IonButtons,
IonMenuButton, IonBackButton, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardContent, } from
'@ionic/angular/standalone';
import { bookOutline, desktopOutline, schoolOutline, cogOutline, ribbonOutline, personCircleOutline,
listOutline, calendarOutline } from 'ionicons/icons';
@Component({
selector: 'app-academics',
templateUrl: './academics.page.html',
styleUrls: ['./academics.page.scss'],
standalone: true,
imports: [ RouterModule, IonCardContent, IonCardTitle, IonCardHeader, IonImg, IonCard, IonContent,
IonHeader, IonIcon, IonItem, IonLabel, IonList, IonToolbar, IonTitle, IonButtons, IonMenuButton,
IonBackButton,]
})
export class AcademicsPage {
icons = {
ceit: desktopOutline,
teacherEducation: schoolOutline,
technology: cogOutline,
artsSciences: bookOutline,
graduateStudies: ribbonOutline,
registrar: personCircleOutline,
coursesOffered: listOutline,
calendar: calendarOutline
};
}