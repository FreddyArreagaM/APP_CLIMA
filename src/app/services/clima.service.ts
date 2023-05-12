import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  key = 'be665555ac9a1636a085b7a69869a89c';
  url = 'https://api.openweathermap.org/data/2.5/weather?&appid=';

  constructor(private http: HttpClient) {

  }

  getClima(ciudad: string): Observable<any> {
    const URL = this.url + this.key + '&q=' + ciudad;
    return this.http.get(URL);
  }


}
