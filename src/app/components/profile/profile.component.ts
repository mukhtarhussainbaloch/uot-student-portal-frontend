import { Component } from '@angular/core';
import { PersonInfoService } from '../../services/person-info.service';
import { Person } from '../../models/person';
import { Observable } from 'rxjs';
import { AddressInfoService } from '../../services/address-info.service';
import { Address } from '../../models/address';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  person: Observable<Person>;
  // address: Observable<Address[]>;
  searchTerm: string;
  addresses: Address[] | undefined;
  constructor(
    private personalInfoService: PersonInfoService,
    private addressInfoService: AddressInfoService,
    private route: ActivatedRoute
  ) {
    this.searchTerm = this.route.snapshot.paramMap.get('id') || '1';
    this.person = this.personalInfoService.getPersonById(this.searchTerm);
    this.person.subscribe((person) => {
      this.addresses = person.addresses;
    });
    // this.address = this.addressInfoService.getAddress("2015");
  }
}
