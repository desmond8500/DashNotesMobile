import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.page.html',
  styleUrls: ['./index-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class IndexPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
