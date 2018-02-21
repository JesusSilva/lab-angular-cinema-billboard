import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/cinemarooms.service';

@Component({
  selector: 'app-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  id:number;
  movies:any;

  constructor(public route:ActivatedRoute, public movieSample:MoviesService) { 
   this.route.params.subscribe(p=>{
     this.id = p.id;
     console.log(this.id)
   })
  }
  ngOnInit() {
    this.movies = this.movieSample.getMovie(this.id);
    console.log('lol:' + this.movies);
  }

}