import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.page.html',
  styleUrls: ['./clients-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ClientsPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
