import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { profilePic } from '../models/profile-pic';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProfilePicService {
  private apiUrl= 'http://localhost:5000/profilePic';

  constructor( private http: HttpClient) { }

  uploadPP( pic: profilePic): Observable<profilePic>{
    //const formData = new FormData();
    //formData.append('profilePic',pic.imageUrl,);

    return this.http.post<profilePic>(this.apiUrl, pic, httpOptions);
  }
}
