import { Component, OnInit,ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2  ) { }
  select:string=''
  id:string=''
  width:number
  popvalues:any
  popElement:boolean=false
  height:number
  genre:any[]=[{type:'Select the Genre',id:-1},{type:'Action', id:28},{type:'Adventure',id:12},{type:'Comedy',id:35},{type:'Crime',id:80},{type:'Animation',id:16},{type:'Documentry',id:99},{type:'Family',id:10751},{type:'History',id:14},{type:'Horror',id:27},{type:'Western',id:37},{type:'Thriller',id:53},{type:'War',id:10752}]

  ngOnInit(): void {}

  @HostListener('window:resize',['$event'])
  onWindowResize(event:Event){
    console.log("Windows is resized")
    const otherDiv = this.elementRef.nativeElement.querySelector('.movie-container');
    // Get the height using Renderer2
    // const height = this.renderer.setStyle(otherDiv, 'height');
    this.width=window.innerWidth
    this.height=window.innerHeight
    console.log('Width of other div:', this.width);
  }

  getCountArray(n:number){
    return Array(n).fill(0).map((_,index)=>index)
  }

  onChange(value:any){
    this.select=value.value
    this.id=value.selectedOptions[0].getAttribute('id')
    console.log(this.select,this.id)
  }

  changeIt(value:boolean){
    console.log('In container component changeIt() ')
    this.popElement=value
  }

  openPop(){
    this.popElement=true
  }

  sendToPop(value:any){
    this.popvalues=value
    console.log("in sendToPop() ",this.popvalues)
  }

}
