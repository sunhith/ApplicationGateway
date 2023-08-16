import { Component, OnInit } from '@angular/core';
import { chemical } from './chemical.model';
import { ChemicalService } from './chemical.service';
import { FacilityService } from './facility.service';
import { facility } from './facility.model';

@Component({
  selector: 'jhi-chemical',
  templateUrl: './chemical.component.html',
  styleUrls: ['./chemical.component.scss']
})
export class ChemicalComponent implements OnInit {
  casNumber: string = '';
  searchResults: chemical;
  searchNotFound: boolean = false;
  facilities: facility[] = [];
  facilityServiceName: string;
  chemicalServiceName: string;
  features: string[] = [];

  constructor(private chemicalservice: ChemicalService, private facilityservice: FacilityService) {}

  ngOnInit() {
    this.listFacilities();
    this.searchNotFound = false;
    this.getChemicalServiceName();
    this.getFacilityServiceName();
    this.getFeatures();
  }

  getChemicalServiceName() {
    this.chemicalservice.getChemicalServiceName().subscribe(
      (data: string) => {
        this.chemicalServiceName = data;
      },
      error => {
        console.error('Error fetching chemical service name', error);
        this.chemicalServiceName = 'chemical service';
      }
    );
  }

  getFacilityServiceName() {
    this.facilityservice.getFacilityServiceName().subscribe(
      (data: string) => {
        this.facilityServiceName = data;
      },
      error => {
        console.error('Error fetching chemical service name', error);
        this.facilityServiceName = 'facility service';
      }
    );
  }

  searchByCas() {
    this.chemicalservice.loadChemicalByCas(this.casNumber).subscribe(
      (data: chemical) => {
        this.searchResults = data;
        this.searchNotFound = false;
      },
      error => {
        console.error('Error fetching data:', error);
        this.searchNotFound = true;
        this.searchResults = undefined;
      }
    );
  }

  listFacilities() {
    this.facilityservice.listFacilities().subscribe(
      (data: facility[]) => {
        this.facilities = data;
      },
      error => {
        console.error('Error fetching facilities:', error);
      }
    );
  }

  getFeatures() {
    this.chemicalservice.getFeatures().subscribe(
      (response: string[]) => {
        this.features = response;
      },
      error => {
        console.error('Error fetching features:', error);
        this.features = [];
      }
    );
  }
}
