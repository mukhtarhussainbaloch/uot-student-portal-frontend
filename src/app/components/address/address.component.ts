import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Address} from "../../models/address";
import {AddressInfoService} from "../../services/address-info.service";
import {Person} from "../../models/person";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  // @Input()
  // addresses: Address[] = [];
  address_dataSource = ADDRESS_DATA;
  constructor() {
  }

  displayedColumns   = [
    {
      name: 'addressType',
      label: 'Address Type'
    },
    {
      name: 'cityVillage',
      label: 'City/Village'
    },
    {
      name: 'provinceState',
      label: 'Province'
    },
    {
      name: 'district',
      label: 'District'
    },
    {
      name: 'country',
      label: 'Country'
    },
    {
      name: 'fullAddress',
      label: 'Full Address'

    }
  ];
  displayedColumnsList=  ['addressType', 'cityVillage', 'provinceState', 'district', 'country', 'fullAddress'];
}

const ADDRESS_DATA: Address[] = [
  {
    addressType: 'Permanent',
    cityVillage: 'Turbat',
    provinceState: 'Balochistan',
    district: 'Kech',
    country: 'Pakistan',
    fullAddress: 'House No. 123, Street No. 456, Turbat, Balochistan, Quetta, Pakistan, Kalatuk, Kech, Balochistan, Pakistan'
  },
  {
    addressType: 'Postal',
    cityVillage: 'Quetta',
    provinceState: 'Balochistan',
    district: 'Quetta',
    country: 'Pakistan',
    fullAddress: 'House No. 123, Street No. 456, Balochistan, Quetta, Pakistan'
  },
  ];
