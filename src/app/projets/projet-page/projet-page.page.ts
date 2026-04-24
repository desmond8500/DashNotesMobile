import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-projet-page',
  templateUrl: './projet-page.page.html',
  styleUrls: ['./projet-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ProjetPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
