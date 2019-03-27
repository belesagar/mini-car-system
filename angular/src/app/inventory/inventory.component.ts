import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators,FormControl,FormArray } from '@angular/forms';
import { CommonService } from '../common.service';
import { ConstantComponent } from '../constant/constant.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  model_list: any[] = [];
  constructor(private commonservice: CommonService,private http: HttpClient) { }

  ngOnInit() {
    this.get_model_data();
  }

  //Thhis function for getting model data
  get_model_data()
  {
    let apiUrl = ConstantComponent.API_URL+`get_model_data`;
    return this.http.get(apiUrl).subscribe(response => {
      console.log(response)
      if(response['success'] == true)
      {
        this.model_list = response['data'];
        this.model_list.map(v=>{
          v['images'] = JSON.parse(v['images']);
          return v;
        })
     
      }else{
        // this.errorMessage = response['info'];
        // this.error_show = true;
        // this.successMessage = "";
      }
     
    });
  }

}
