import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetail } from './movie-detail';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  url:string=''
  apiKey:string='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzcxYzFiODBkMWJiZmJhODk0Yzc4NjI3YWMyYTM5YiIsInN1YiI6IjY0YWNlMmEzOGEwZTliMDBhZGFiNGZmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r5pYdvfGk2rvhAdVAPyjUJGH-F4nUHWLxT2CHonMnWc'
  constructor(private http:HttpClient) { }
  headers=new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':`Bearer ${this.apiKey}`
  })
  makeRequest(url:string):Observable<any>{
      return this.http.get<any>(url,{headers:this.headers})
  }
  makeRequestWithGenreId(url:string):Observable<any>{
    return this.http.get<any>(url,{headers:this.headers})
  }

  searchWithName(word:string){
    let arr=word.split(' ')
    let search=arr.join('%20')
    let url=`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`
    return this.http.get<any>(url,{headers:this.headers})
  }

}
