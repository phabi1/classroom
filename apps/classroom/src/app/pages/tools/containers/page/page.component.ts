import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tool } from '../../models/tool.model';

@Component({
  selector: 'classroom-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  items$: Observable<Tool[]>;

  constructor() {}

  ngOnInit(): void {
    this.items$ = of([
      {
        title: 'Calendrier du mois',
        link: 'daysofmonth',
      },
    ]);
  }
}
