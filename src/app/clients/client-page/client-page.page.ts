import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.page.html',
  styleUrls: ['./client-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ClientPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
