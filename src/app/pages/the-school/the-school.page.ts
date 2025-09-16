import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { flagOutline, saveOutline, receiptOutline, musicalNotesOutline, locationOutline } from
'ionicons/icons';
@Component({
selector: 'app-the-school',
standalone: true,
imports: [IonicModule, CommonModule, RouterModule],
templateUrl: './the-school.page.html',
styleUrls: ['./the-school.page.scss'],
})
export class TheSchoolPage {
icons = { flagOutline, saveOutline, receiptOutline, musicalNotesOutline, locationOutline }; // ✅
}