import { Pipe, PipeTransform } from '@angular/core';
import { PropertiesListEntry } from 'src/app/model/PropertiesListEntry';

@Pipe({
  name: 'filterProperty',
})
export class FilterPropertyPipe implements PipeTransform {
  transform(
    properties: PropertiesListEntry[],
    filterQuery: string
  ): PropertiesListEntry[] {
    if (!filterQuery) return properties;
    // return properties.filter((pr) => pr.propertyType === filterQuery);
    return properties;
  }
}
