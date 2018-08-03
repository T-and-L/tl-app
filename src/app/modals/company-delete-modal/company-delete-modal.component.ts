import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {CompanyRegistrationModalComponent} from '../company-registration-modal/company-registration-modal.component';
import {CompaniesService} from '../../services/companies/companies.service';

@Component({
  selector: 'app-company-delete-modal',
  templateUrl: './company-delete-modal.component.html',
  styleUrls: ['./company-delete-modal.component.css']
})
export class CompanyDeleteModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CompanyDeleteModalComponent>,
              public companiesService: CompaniesService,
              ) { }

  ngOnInit() {
  }

  onCloseConfirm(companyId: string) {
    // console.log(email);
    this.companiesService.deleteCompany(companyId);
    this.dialogRef.close('Confirm');
    alert('Company deleted!!');
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }
}
