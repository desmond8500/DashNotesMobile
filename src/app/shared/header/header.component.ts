import { Component, Input, OnInit } from '@angular/core';
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonBackButton, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = 'Projet';

  constructor() {}

  ngOnInit() {}
}
