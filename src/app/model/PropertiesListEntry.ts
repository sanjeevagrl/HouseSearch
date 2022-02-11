export interface PropertiesListEntry {
  id?: string;
  address: string;
  postcode: string;
  propertyType?: string;
  numberOfRooms?: number;
  floorArea?: number;
  check?: boolean;
}
export interface PropertiesListType {
  label: string;
  value: string;
}

export interface PropertiesSearchInput {
  address: string;
  propertyType?: string;
}
