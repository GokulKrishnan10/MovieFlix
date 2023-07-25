import { Component, OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor() { }
  @Input() pop:boolean
  @Input() moviesObject:any
  @Input() Width:number
  @Input() Height:number
  @Output() newPopEvent=new EventEmitter<boolean>()
  ngOnInit(): void {
    // console.warn('New data for movies',this.moviesObject)
    // console.log('pop it or not',this.pop)
    this.Height=window.innerHeight
    this.Width=window.innerWidth
    console.log(this.Width, this.Height, "Height value updated from the Window SIZE")
  }
  ngOnChanges():void{
    console.log(this.Width, this.Height, "Height value updated from the container")
  }
  closeIt(){
    this.pop=false
    console.log('Event emitting------ Pop Up closed')
    this.newPopEvent.emit(false)
  }
}
