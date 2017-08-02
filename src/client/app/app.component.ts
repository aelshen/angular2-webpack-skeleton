import { Component, OnInit } from '@angular/core';

import { CONFIG } from './config';

@Component({
  selector: 'vbt-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  welcomeMessage: string;
  
  constructor() { }

  ngOnInit() {
    this.welcomeMessage = 'Hello World!'
    console.log("FOO IS " + CONFIG.FOO);
   }
}