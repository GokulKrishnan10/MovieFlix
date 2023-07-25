import { Component, OnInit,ElementRef, Renderer2 } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  popElement:boolean=false
  popvalues:any
  width:string
  ngOnInit(): void {
    const otherDiv = this.elementRef.nativeElement.querySelector('.home-container');

    // Get the height using Renderer2
    // const height = this.renderer.setStyle(otherDiv, 'height');

    
    this.width=otherDiv.offsetWidth
    console.log('Width of other div:', this.width);
  }
  
  changePop(value:boolean){
    console.log("Change pop is occurring in HOME component")
    this.popElement=value
  }

  changeIt(value:boolean){
    console.log('In HOME component changeIt() ')
    this.popElement=value
  }

  sendToPop(value:any){
    this.popvalues=value
    console.log("in HOME Component sendToPop() ",this.popvalues)
  }
}
