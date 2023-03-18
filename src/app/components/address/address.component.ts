import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Address} from "../../models/address";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  @Input()
  addressObservable!: Observable<Address[]>;
  constructor() {

  }
  // loadAddress(id: string) {
  //   this.addressObservable = this.addressInfoService.getAddress(id);
  // }
}
