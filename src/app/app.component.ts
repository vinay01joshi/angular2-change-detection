import { Component, DoCheck } from '@angular/core';
import { Map, List } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'Change Detection';
  movies = [
    Map({ title: 'Movie 1', genre: 1}),
    Map({ title: 'Movie 2', genre: 1}),
    Map({ title: 'Movie 3', genre: 1}),
    Map({ title: 'Movie 4', genre: 1})
  ];
  constructor(){
    var movie  = Map({ title: 'M1', genre: 1});
    var title = movie.get('title');
    movie = movie.set('title','NEW TITLE');
    movie.toJS();
    console.log(movie.toJS());
  }

  ngDoCheck() {
    console.log("AppComponent-DoCheck");
  }

  onClick(){
    var movie = this.movies[0];
    this.movies[0]= movie.set('title','updated');
  }
}
