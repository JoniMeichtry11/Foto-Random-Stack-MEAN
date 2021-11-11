import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Image } from '../Image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  URL_API = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  getImagesAPI(): Observable<any>{
    return this.http.get(this.URL_API);
  }
}
