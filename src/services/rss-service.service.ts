import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rss } from 'src/models/rss';
//import { newRss } from 'src/models/newRss';


@Injectable({
  providedIn: 'root'
})
export class RssServiceService {
  configUrl = 'http://127.0.0.1:8000/api/file-rss';
  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<Rss>(this.configUrl);
  }
}
