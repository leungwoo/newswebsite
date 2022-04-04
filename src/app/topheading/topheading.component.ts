import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';
import { Article } from '../interfaces/crypto';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css'],
})
export class TopheadingComponent implements OnInit {
  constructor(private _services: NewsapiserviceService) {}
  //to display data
  public newsHeadingDisplay: Article[] = [];

  ngOnInit(): void {
    this._services
      .getCryptoNewsHeading()
      .subscribe(
        (newsHeadingDisplay) =>
          (this.newsHeadingDisplay = newsHeadingDisplay.articles)
      );
  }
}
