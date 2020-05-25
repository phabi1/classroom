import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'classroom-tools-daysofmonth-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  months = [
    {
      data: '1',
      label: 'Janvier',
    },
    {
      data: '2',
      label: 'Février',
    },
    {
      data: '3',
      label: 'Mars',
    },
    {
      data: '4',
      label: 'Avril',
    },
    {
      data: '5',
      label: 'Mai',
    },
    {
      data: '6',
      label: 'Juin',
    },
    {
      data: '7',
      label: 'Juillet',
    },
    {
      data: '8',
      label: 'Août',
    },
    {
      data: '9',
      label: 'Septembre',
    },
    {
      data: '10',
      label: 'Octobre',
    },
    {
      data: '11',
      label: 'Novembre',
    },
    {
      data: '12',
      label: 'Décembre',
    },
  ];

  form: FormGroup;

  constructor(formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.form = formBuilder.group({
      month: [null, Validators.required],
      year: [null, Validators.required],
      excludedDays: [null],
    });
  }

  ngOnInit(): void {}

  generate() {
    this.httpClient
      .post('/api/daysofmonth/generate', this.form.value)
      .subscribe(() => {});
  }
}
