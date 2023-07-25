import { Component, OnInit, Output, SimpleChanges,EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  constructor(private api:APIService) { }
  @Input() main:string
  @Input() id:string
  @Output() popEvent=new EventEmitter<boolean>()
  @Output() passToPop=new EventEmitter<any>()
  genres:any[]
  ngOnInit(): void {
    console.log('No----------------- IN Genre component',this.main)
  }

  change(object:any){
    console.log("changing this")
    this.popEvent.emit(true)
    console.log("Object is in genre--------------------",object)
    this.passToPop.emit(object)
  }

  ngOnChanges():void{
    console.warn("Changing components..........................",this.main,this.id)
    let _url:string=`https://api.themoviedb.org/3/discover/movie?with_genres=${this.id}&include_adult=false&language=en-US&page=1`
    this.api.makeRequestWithGenreId(_url).subscribe(data=>{
        this.genres=data.results
        this.passToPop.emit(this.genres)
    }
    ,error=>console.log(error))
   
  }

  changeMovies(obj:any):void{
      this.passToPop.emit(obj)
  }

}
