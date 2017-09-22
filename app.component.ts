import { Component } from '@angular/core';
import {ValidateService } from '../services/validate.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fromdate:Date;
  todate:Date;

  Result:Object;
  //arr:any;
  requests:any;
  constructor(private _validateService:ValidateService){


  }


  onSubmit(){
  	var date={
  		fromdate:this.fromdate,
  		todate:this.todate
  	}

  	this._validateService.getadRequests(date).subscribe(data=>{
  	
  	 	var arr = [];
  		arr = data.data

  		var arr1=[]

 		for(var i=0;i<arr.length;i++){
 		 	let obj = {
  				label:arr[i].date,
  				value:arr[i].adrequest
  			}
  			arr1.push(obj);
  	 		
  	  	}

  		this.Result = {
	      chart:{ },
	      data: arr1
    	}

  	});
  	

  }

}


