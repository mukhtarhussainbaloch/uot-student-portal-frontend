import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private uriPrefix = 'assets/data/config/';
  private uriSuffix = '.json';

  constructor(private httpClient: HttpClient,) { }
  public get(filename: string): Observable<any> {
    return this.httpClient.get<any>(this.uriPrefix + filename + this.uriSuffix);
  }
}
