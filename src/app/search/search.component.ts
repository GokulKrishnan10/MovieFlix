import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private api:APIService) { }
  moviesArray:object[]
  popELement:boolean=false
  width:number
  popvalues:any
  popElement:boolean=true 
  height:number
  display:boolean=false
  searchArray:any
  ngOnInit(): void {
  }

  searchForMovies(movies:string){
    console.log("Movies are being searched",movies)
    this.display=false
    this.api.searchWithName(movies).subscribe(data=>{
      this.moviesArray=data.results
      console.log(this.moviesArray)
    },error=>console.error(error))
  }

  changeIt(value:boolean){
    console.log('In container component changeIt() ')
    this.popElement=value
  }

  handleInput(value:string){
    if(value){
      this.display=true
    }
    console.log("The value on typing is",value)
    this.api.searchWithName(value).subscribe(data=>{
      this.searchArray=data.results
      console.log(this.searchArray)
    },(error)=>console.log(error))
  }

}
