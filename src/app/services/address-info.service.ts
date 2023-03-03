import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Address} from "../models/address";


// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// }
@Injectable({
  providedIn: 'root'
})
export class AddressInfoService {

  private apiBaseUrl= 'http://localhost:8080/api/v1/people';

  constructor(private http: HttpClient) { }


  getAddress(personId: string): Observable<Address[]>{

    console.log("getting address for person id: "+personId);
    return this.http.get<Address[]>(this.apiBaseUrl+"/"+personId+"/address");
  }
}
