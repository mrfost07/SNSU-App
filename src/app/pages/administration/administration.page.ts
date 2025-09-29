import { Component, OnInit } from '@angular/core';
import { IonicModule, MenuController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { peopleOutline, documentOutline, personOutline, peopleCircleOutline, manOutline } from
'ionicons/icons';
@Component({
selector: 'app-administration',
standalone: true,
imports: [IonicModule, CommonModule, RouterModule],
templateUrl: './administration.page.html',
styleUrls: ['./administration.page.scss'],
})
export class AdministrationPage implements OnInit {
icons = { peopleOutline, documentOutline, personOutline, peopleCircleOutline, manOutline }; // ✅

constructor(private menuCtrl: MenuController) {}

ngOnInit() {}

async toggleMenu() {
await this.menuCtrl.toggle('administration-menu');
}
}