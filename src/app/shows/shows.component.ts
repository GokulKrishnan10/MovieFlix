import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { APIService } from '../api.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  @Input() url:string=""
  @Output() popEvent=new EventEmitter<boolean>()
  @Output() passToPop=new EventEmitter<any>()
  constructor(private api:APIService) { }
  movies=[]
  ngOnInit(): void {
    console.log('URL==================================',this.url)
    this.api.makeRequest(this.url).subscribe(data=>{
      this.movies=data.results
      console.log(typeof data)
      console.log(data.results[0].name)
      console.log('IN ngOnInit()------',this.movies,data )
    },error=>this.errorMessage)
  }
  errorMessage(){
    console.error("No ....error have occured")
  }
  change(object:any){
    console.log("changing this SHOWS")
    this.popEvent.emit(true)
    console.log("Object is in SHOWS--------------------",object)
    this.passToPop.emit(object)
  }
}
