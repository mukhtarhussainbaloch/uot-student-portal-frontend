import {Component} from '@angular/core';
import {PersonalInfoService} from "../../services/personal-info.service";
import {Person} from "../../models/person";
import {Observable} from "rxjs";
import {AddressInfoService} from "../../services/address-info.service";
import {Address} from "../../models/address";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  person: Observable<Person>;
  address: Observable<Address[]>;
  searchTerm: string= `1102011`;
  constructor(private personalInfoService: PersonalInfoService, private addressInfoService: AddressInfoService) {
    this.person = this.personalInfoService.getPerson(this.searchTerm);
    this.address = this.addressInfoService.getAddress("2015");
  }

}
