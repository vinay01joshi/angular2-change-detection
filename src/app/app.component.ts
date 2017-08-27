import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Change Detection';
  movies = [
    {title: 'Movie 1'},
    {title: 'Movie 2'},
    {title: 'Movie 3'},
    {title: 'Movie 4'},
  ];
}
