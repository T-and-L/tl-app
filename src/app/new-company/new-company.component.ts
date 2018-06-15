import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';

import {Company} from '../models/company.model';
@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {

  states = [
    {label: 'AL', value: 'AL'},
    {label: 'AK', value: 'AK'},
    {label: 'AZ', value: 'AZ'},
    {label: 'AR', value: 'AR'},
    {label: 'CA', value: 'CA'},
    {label: 'CO', value: 'CO'},
    {label: 'CT', value: 'CT'},
    {label: 'DE', value: 'DE'},
    {label: 'FL', value: 'FL'},
    {label: 'GA', value: 'GA'},
    {label: 'HI', value: 'HI'},
    {label: 'ID', value: 'ID'},
    {label: 'IL', value: 'IL'},
    {label: 'IN', value: 'IN'},
    {label: 'IA', value: 'IA'},
    {label: 'KS', value: 'KS'},
    {label: 'KY', value: 'KY'},
    {label: 'LA', value: 'LA'},
    {label: 'ME', value: 'ME'},
    {label: 'MD', value: 'MD'},
    {label: 'MA', value: 'MA'},
    {label: 'MI', value: 'MI'},
    {label: 'MN', value: 'MN'},
    {label: 'MS', value: 'MS'},
    {label: 'MO', value: 'MO'},
    {label: 'MT', value: 'MT'},
    {label: 'NE', value: 'NE'},
    {label: 'NV', value: 'NV'},
    {label: 'NH', value: 'NH'},
    {label: 'NJ', value: 'NJ'},
    {label: 'NM', value: 'NM'},
    {label: 'NY', value: 'NY'},
    {label: 'NC', value: 'NC'},
    {label: 'ND', value: 'ND'},
    {label: 'OH', value: 'OH'},
    {label: 'OK', value: 'OK'},
    {label: 'OR', value: 'OR'},
    {label: 'PA', value: 'PA'},
    {label: 'RI', value: 'RI'},
    {label: 'SC', value: 'SC'},
    {label: 'SD', value: 'SD'},
    {label: 'TN', value: 'TN'},
    {label: 'TX', value: 'TX'},
    {label: 'UT', value: 'UT'},
    {label: 'VT', value: 'VT'},
    {label: 'VA', value: 'VA'},
    {label: 'WA', value: 'WA'},
    {label: 'WV', value: 'WV'},
    {label: 'WI', value: 'WI'},
    {label: 'WY', value: 'WY'}
  ];

  companyNameVar = '';
  street1Var = '';
  street2Var = '';
  cityVar = '';
  stateVar = '';
  zipcodeVar = '';

  @Output() companyCreated = new EventEmitter<Company>();

  constructor() { }

  ngOnInit() {
  }

  onAddCompany() {
    const company: Company = {
      companyName: this.companyNameVar,
      companyAddress: {
        street1: this.street1Var,
        street2: this.street2Var,
        city: this.cityVar,
        state: this.stateVar,
        zipcode: this.zipcodeVar
      }

    };
    this.companyCreated.emit(company);
    console.log(company);
  }

}