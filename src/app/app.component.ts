import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies = [ 
    { title: 'm1' },
    { title: 'm2' },
    { title: 'm3' }
  ];
}
