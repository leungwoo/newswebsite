import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoNews } from '../interfaces/crypto';
import { TechNews } from '../interfaces/technology';

@Injectable({
  providedIn: 'root',
})
export class NewsapiserviceService {
  constructor(private _http: HttpClient) {}

  public cryptoNewsApiUrl =
    'https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=bdf406765a374ca3b3c9c88aaf097343';

  public techNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=bdf406765a374ca3b3c9c88aaf097343';

  public getCryptoNewsHeading(): Observable<CryptoNews> {
    return this._http.get<CryptoNews>(this.cryptoNewsApiUrl);
  }
  public getTechNewsHeading(): Observable<TechNews> {
    return this._http.get<TechNews>(this.techNewsApiUrl);
  }
}
