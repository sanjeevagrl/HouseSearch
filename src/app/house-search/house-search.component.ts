import { Component, OnInit } from '@angular/core';
import {
  PropertiesListEntry,
  PropertiesListType,
  PropertiesSearchInput,
} from 'src/app/model/PropertiesListEntry';
declare const fetchProperties: any;
declare const fetchPropertyDetails: any;
declare const getAvailablePropertyTypes: any;

@Component({
  selector: 'app-house-search',
  templateUrl: './house-search.component.html',
  styleUrls: ['./house-search.component.css'],
})
export class HouseSearchComponent implements OnInit {
  public searchProperties$: Promise<PropertiesListEntry[]>;
  public searchPropertiesType$: Promise<PropertiesListType[]>;
  public selectedProperties: PropertiesListEntry[] = [];
  public searchPropertyText: string = '';
  public searchErrorMessage: string = '';
  public searchResultCount: number;
  public selectedPropertyType: string = '';
  constructor() {}

  ngOnInit(): void {
    this.searchPropertiesType$ = this.getPropertyType();
  }
  getpropertySearchResult(
    search: PropertiesSearchInput
  ): Promise<PropertiesListEntry[]> {
    this.searchErrorMessage = '';
    // this.searchResultCount = 0;
    return fetchProperties(search)
      .then((data: { properties: PropertiesListEntry[] }) => {
        return Promise.all(
          data.properties.map((d: PropertiesListEntry) =>
            fetchPropertyDetails(d.id)
          )
        );
      })
      .then((data2: PropertiesListEntry[]) => {
        this.searchResultCount = data2.length;
        return data2.map((a: any) => a.property);
      })
      .catch((err: any) => this.gotError(err));
  }

  getPropertyType(): Promise<PropertiesListType[]> {
    return getAvailablePropertyTypes().then((propertytype: any) => {
      return propertytype?.propertyTypes.map((data: any) => data);
    });
  }
  gotError(error: string) {
    this.searchErrorMessage = error;
  }
  onRowSelected(rowData: any, event: any) {
    if (event.target.checked) {
      if (this.selectedProperties.findIndex((ch) => ch.id === rowData.id) <= -1)
        this.selectedProperties.push({ ...rowData });
    } else {
      this.selectedProperties.splice(
        this.selectedProperties.findIndex((ch) => ch.id === rowData.id),
        1
      );
    }

    console.log(event);
  }
  propertyTypeSelected(rowData: PropertiesListType) {
    console.log(rowData);
    this.searchProperties$ = this.getpropertySearchResult({
      address: this.searchPropertyText,
      propertyType: rowData.value,
    });
  }
  searchProperty() {
    this.searchProperties$ = this.getpropertySearchResult({
      address: this.searchPropertyText,
    });
  }
}
