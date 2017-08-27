import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements DoCheck {
  @Input() movies;

  ngDoCheck(){
    console.log('MoviesComponent-DoCheck');
  }
}
