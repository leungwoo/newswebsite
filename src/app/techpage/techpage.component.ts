import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/technology';
import { NewsapiserviceService } from '../service/newsapiservice.service';
@Component({
  selector: 'app-techpage',
  templateUrl: './techpage.component.html',
  styleUrls: ['./techpage.component.css'],
})
export class TechpageComponent implements OnInit {
  constructor(private _service: NewsapiserviceService) {}
  //data to display
  public techNews: Article[] = [];
  ngOnInit(): void {
    this._service.getTechNewsHeading().subscribe((techNews) => {
      console.log(techNews);
      this.techNews = techNews.articles;
    });
  }
}
