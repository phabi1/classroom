import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
      excludedDays: [
        null,
        Validators.pattern(/\d+(?:-\d+)?(?:,\d+(?:-\d+)?)*/),
      ],
    });
  }

  ngOnInit(): void {}

  generate() {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    this.httpClient
      .post<Blob>('/api/daysofmonth/generate', this.form.value, {
        responseType: 'blob' as 'json',
        headers: headers,
      })
      .subscribe((val) => this.createPdfFromBlob(val));
  }

  createPdfFromBlob(blob: Blob) {
    const downloadURL = URL.createObjectURL(blob);
    window.open(downloadURL);
  }
}
