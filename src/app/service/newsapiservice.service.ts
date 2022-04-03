import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiserviceService {
  constructor(private _http: HttpClient) {}
  newsApiUrl =
    'https://newsapi.org/v2/everything?q=bitcoin&apiKey=bdf406765a374ca3b3c9c88aaf097343';

  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }
}
