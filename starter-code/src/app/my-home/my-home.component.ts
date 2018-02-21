import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/cinemarooms.service'

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  movies: Array<object>;
  constructor(private theMovies: MoviesService) { }
  
  ngOnInit() {
    this.movies = this.theMovies.getMovies();
  }

}
