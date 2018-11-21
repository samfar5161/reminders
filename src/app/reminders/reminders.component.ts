import { Component, OnInit } from '@angular/core';
import { REMINDERS } from '../reminders';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {
  reminders = REMINDERS;

  constructor() { }

  ngOnInit() {
  }

}
