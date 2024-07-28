import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {

  public postUrl : string= 'https://jsonplaceholder.typicode.com/posts'
  constructor(private _http :HttpClient) { 

  }
  ngOnInit(): void {
    
  }
  getHttpData() :Observable<any> {
     return this._http.get<string>(this.postUrl).pipe(
      map((user : any) =>{
        let data: any = [];
        for (const item in user) {
          let obj = {
            id: item,
            ...user[item],
          };
          data.push(obj);
        }
        return data;
      })
     )
  }

}
