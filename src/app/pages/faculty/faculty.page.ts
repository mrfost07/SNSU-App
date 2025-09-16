import { Component } from '@angular/core';
import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonToolbar,
IonTitle, IonButtons, IonMenuButton, IonBackButton, IonImg } from
'@ionic/angular/standalone';
import { bookOutline, desktopOutline, schoolOutline, cogOutline, ribbonOutline }
from 'ionicons/icons';
@Component({
selector: 'app-faculty',
templateUrl: './faculty.page.html',
styleUrls: ['./faculty.page.scss'],
standalone: true,
imports: [IonImg, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList,
IonToolbar, IonTitle, IonButtons, IonMenuButton, IonBackButton]
})
export class FacultyPage {
icons = {
ceit: desktopOutline,
teacherEducation: schoolOutline,
technology: cogOutline,
artsSciences: bookOutline,
graduateStudies: ribbonOutline
};
}