import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  http: HttpClient = inject(HttpClient);

  getInternetTime() {
    return this.http.get<any>('https://timeapi.io/api/Time/current/zone?timeZone=UTC').pipe(
      map(res => new Date(res.dateTime)) // Convert string to Date
    );
  }
  
}
