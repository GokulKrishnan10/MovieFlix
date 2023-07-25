import { Component, Input, OnInit ,Output, EventEmitter} from '@angular/core';
import { MovieDetail } from '../movie-detail';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movies:any={}
  constructor() { }

  ngOnInit(): void {
    console.log(this.movies)
  }
}