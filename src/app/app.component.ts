import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Reminders App';
  reminder1 = 'Call Mom';
  reminder2 = 'Get Milk';
  reminder3 = 'Interview';
}