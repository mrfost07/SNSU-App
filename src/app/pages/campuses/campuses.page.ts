import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule
import { IonicModule } from '@ionic/angular';
import { locationOutline, businessOutline, schoolOutline } from 'ionicons/icons';
@Component({
selector: 'app-campuses',
standalone: true,
imports: [CommonModule, IonicModule, RouterModule], // ✅ Add RouterModule
templateUrl: './campuses.page.html',
styleUrls: ['./campuses.page.scss'],
})
export class CampusesPage {
icons = { delCarmen: locationOutline, mainit: businessOutline, malimono: schoolOutline };
}
