
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advertisement } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'otthonbazar';
  navBarCollapsed: boolean = true;
  constructor(private http: HttpClient) { }
  advertisements: Advertisement[] = [];
  ngOnInit() {
    this.http.get<Advertisement[]>('/api/advertisements').subscribe(resp =>
      this.advertisements = resp
    );
  }
}
