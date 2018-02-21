import { Injectable } from "@angular/core";
import arrmovies from "../../sample-movies";

@Injectable()
export class MoviesService {
  movies: any= arrmovies;
  constructor() {}

  ngOnInit() {

  }

  getMovies(): Array<object> {
    return this.movies;
  }

  getMovie(id) {
    
    for(let i=0;i<this.movies.length;i++){
      if(this.movies[i].id == id){
          return this.movies[i];
      }
    }
  }
}