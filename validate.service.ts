import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions,URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ValidateService {

  constructor(private http:Http) { }

  getadRequests(date){
  	console.log("date in ValidateService getadRequests function",date);
  	
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let params:URLSearchParams=new URLSearchParams();
    params.set('from',date.fromdate);
    params.set('to',date.todate);

  	return this.http.get('http://104.197.128.152/data/adrequests',{search:params,headers: headers })
  					.map(res=>res.json());
  }

}
