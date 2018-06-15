import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import {Company} from '../models/company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  // companies = [
  //
  //   {
  //     companyName: 'T&L',
  //     companyAddress: {
  //       street: '265 Hollenbeck St.',
  //       city: 'Rochester',
  //       state: 'NY',
  //       zipcode: '14621'
  //     }
  //   },
  //   {
  //     _id: 'SMzgR7ptTbKB6d43v',
  //     companyName: 'Monroe Plating',
  //     companyAddress: {
  //       street: '265 Hollenbeck St.',
  //       city: 'Rochester',
  //       state: 'NY',
  //       zipcode: '14621'
  //     },
  //     salesPerson: {
  //       name: 'John Rowe',
  //       email: 'jrowe@monroeplating.com',
  //       phone: '585-544-5335',
  //       status: true
  //     },
  //     qualityPerson: {
  //       name: 'Rodney Olson',
  //       email: 'rolson@monroeplating.com',
  //       phone: '585-544-5335',
  //       status: true
  //     },
  //     logisticsPerson: {
  //       name: 'Cindy Poole',
  //       email: 'cpoole@monroeplating.com',
  //       phone: '585-544-5335',
  //       status: true
  //     },
  //     itemDescription: 'Plating Services',
  //     certification: [
  //       {
  //         certType: 'ISO9001',
  //         expirationDate: '2016-09-11T00:00:00.000Z',
  //         certNumber: 'US006178-1',
  //         registrar: 'Bureau Veritas Certification'
  //       }
  //     ],
  //     differentPerson: {
  //       status: false
  //     }
  //   },
  //   {
  //     _id: 'SMzgR7ptTbKB6d43v',
  //     companyName: 'Monroe Plating',
  //     companyAddress: {
  //       street: '265 Hollenbeck St.',
  //       city: 'Rochester',
  //       state: 'NY',
  //       zipcode: '14621'
  //     },
  //     salesPerson: {
  //       name: 'John Rowe',
  //       email: 'jrowe@monroeplating.com',
  //       phone: '585-544-5335',
  //       status: true
  //     },
  //     qualityPerson: {
  //       name: 'Rodney Olson',
  //       email: 'rolson@monroeplating.com',
  //       phone: '585-544-5335',
  //       status: true
  //     },
  //     logisticsPerson: {
  //       name: 'Cindy Poole',
  //       email: 'cpoole@monroeplating.com',
  //       phone: '585-544-5335',
  //       status: true
  //     },
  //     itemDescription: 'Plating Services',
  //     certification: [
  //       {
  //         certType: 'ISO9001',
  //         expirationDate: '2016-09-11T00:00:00.000Z',
  //         certNumber: 'US006178-1',
  //         registrar: 'Bureau Veritas Certification'
  //       }
  //     ],
  //     differentPerson: {
  //       status: false
  //     }
  //   },
  //   {
  //     _id: 'SMzgR7ptTbKB6d43v',
  //     companyName: 'Monroe Plating',
  //     companyAddress: {
  //       street: '265 Hollenbeck St.',
  //       city: 'Rochester',
  //       state: 'NY',
  //       zipcode: '14621'
  //     },
  //     salesPerson: {
  //       name: 'John Rowe',
  //       email: 'jrowe@monroeplating.com',
  //       phone: '585-544-5335',
  //       status: true
  //     },
  //     qualityPerson: {
  //       name: 'Rodney Olson',
  //       email: 'rolson@monroeplating.com',
  //       phone: '585-544-5335',
  //       status: true
  //     },
  //     logisticsPerson: {
  //       name: 'Cindy Poole',
  //       email: 'cpoole@monroeplating.com',
  //       phone: '585-544-5335',
  //       status: true
  //     },
  //     itemDescription: 'Plating Services',
  //     certification: [
  //       {
  //         certType: 'ISO9001',
  //         expirationDate: '2016-09-11T00:00:00.000Z',
  //         certNumber: 'US006178-1',
  //         registrar: 'Bureau Veritas Certification'
  //       }
  //     ],
  //     differentPerson: {
  //       status: false
  //     }
  //   }
  // ];

  @Input() companies: Company[] = [];

  constructor() { }

  ngOnInit() {
  }

}