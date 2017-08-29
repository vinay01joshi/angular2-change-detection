import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'Change Detection';
  movies = [
    {title: 'Movie 1'},
    {title: 'Movie 2'},
    {title: 'Movie 3'},
    {title: 'Movie 4'},
  ];

  ngDoCheck() {
    console.log("AppComponent-DoCheck");
  }

  onClick(){
    this.movies[0] = {title: 'UPDATED'};
  }
}
