import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PrayerService {
  constructor(private http: HttpClient) { }

  getPrayer(city: string): Observable<any> {
    return this.http.get('https://api.pray.zone/v2/times/today.json?city=' + city);
  }
}
