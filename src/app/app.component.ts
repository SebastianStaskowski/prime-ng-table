import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, Representative } from './customer';
import { CustomerService } from './customerservice';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { Programmer } from './programmer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./appdemo.scss'],
})
export class AppComponent {
  programmers: Programmer[];

  statuses: any[];

  loading: boolean = true;

  @ViewChild('dt') table: Table;

  constructor(
    private customerService: CustomerService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.programmers = [
      {
        firstname: 'Jan',
        lastname: 'Ban',
        age: 27,
        id: 1,
        email: 'janban2@poczta.fm',
        phoneNumber: '453454543',
        salary: 3429,
        programmingLanguage: 'java',
      },
      {
        firstname: 'Łoskar',
        lastname: 'Prosty',
        age: 27,
        id: 2,
        email: 'Łoskar@poczta.fm',
        phoneNumber: '543454543',
        salary: 121229,
        programmingLanguage: 'c#',
      },
      {
        firstname: 'Kus',
        lastname: 'Dus',
        age: 30,
        id: 3,
        email: 'KutaS2@poczta.fm',
        phoneNumber: '453454543',
        salary: 3321429,
        programmingLanguage: 'c#',
      },
      {
        firstname: 'Raf',
        lastname: 'Bieda',
        age: 27,
        id: 4,
        email: 'bieda@poczta.fm',
        phoneNumber: '34454543',
        salary: 29,
        programmingLanguage: 'Mikser#',
      },
      {
        firstname: 'Patryk',
        lastname: 'Tłusto',
        age: 34,
        id: 5,
        email: 'gruby2@poczta.fm',
        phoneNumber: '453454543',
        salary: 23429,
        programmingLanguage: 'c#',
      },
    ];
    this.primengConfig.ripple = true;
  }
}
