import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
// import { Headers, RequestOptions } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin':'*','Accept': 'application/json',
  'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor(private http: HttpClient,private router: Router) { }

  get_data_by_post(postdata)
  {

    return this.http.post("http://127.0.0.1:8000/index.php/api/get_manufacturer_data",postdata,httpOptions).subscribe(response => {
      //console.log(response);
      return response;
      // if(response['ERROR_CODE'] == 0)
      // {
       
      // }else{
      //   this.router.navigate(['/login']);
      // }
      // console.log("postdata");
      
    });
    

    
  }

}
