import { Component, OnInit } from '@angular/core';
import { PropertiesListEntry } from 'src/app/model/PropertiesListEntry';
declare const fetchProperties: any;
declare const fetchPropertyDetails: any;

@Component({
  selector: 'app-house-search',
  templateUrl: './house-search.component.html',
  styleUrls: ['./house-search.component.css'],
})
export class HouseSearchComponent implements OnInit {
  public searchProperties$: Promise<PropertiesListEntry[]>;
  constructor() {}

  ngOnInit(): void {
    this.testting().then((data: any) => console.log(data));
    this.searchProperties$ = this.testting();
  }
  testting(): Promise<PropertiesListEntry[]> {
    return fetchProperties({ address: 'For' })
      .then((data: { properties: PropertiesListEntry[] }) => {
        return Promise.all(
          data.properties.map((d: PropertiesListEntry) =>
            fetchPropertyDetails(d.id)
          )
        );
      })
      .then((data2: PropertiesListEntry[]) => {
        return data2.map((a: any) => a.property);
      })
      .catch(this.gotError);
  }
  gotError() {
    console.log('error');
  }
}
