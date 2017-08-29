import { Component, OnInit, Input, DoCheck , ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements DoCheck {
  @Input() movie;

  ngDoCheck(){
    console.log('MovieComponent-DoCheck');
  }
}
