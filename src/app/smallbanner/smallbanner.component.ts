import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-smallbanner',
  templateUrl: './smallbanner.component.html',
  styleUrls: ['./smallbanner.component.css']
})
export class SmallbannerComponent implements OnInit {

  @Input() movieObject:any={title:'hjdhdj',poster_path:'dfhjkhsjk',vote_average:'hjsdhskj',backdrop_path:'dgjhsghjd'}
  constructor() { }

  ngOnChanges(){
    console.log("Changing in small banner component",this.movieObject)
  }

  ngOnInit(): void {
  }

}
