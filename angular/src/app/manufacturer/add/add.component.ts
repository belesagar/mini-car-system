import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators,FormControl,FormArray } from '@angular/forms';
import { CommonService } from '../../common.service';
import { ConstantComponent } from '../../constant/constant.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  successMessage: string = "";
  errorMessage: string = "";
  error_show: boolean = false;
  success_show: boolean = false;

  manufacturer_list: [] = [];

  add_manufacturur = new FormGroup({
    manufacturer_name: new FormControl('')
  });
  response;
  constructor(private commonservice: CommonService,private http: HttpClient) { }

  ngOnInit() {
    this.get_manufacturer_data();
  }

  get_manufacturer_data()
  {
    let apiUrl = ConstantComponent.API_URL+`get_manufacturer_data`;
    return this.http.get(apiUrl).subscribe(response => {
      console.log(response)
      if(response['success'] == true)
      {
        this.manufacturer_list = response['data'];
       
      }else{
        this.errorMessage = response['info'];
        this.error_show = true;
       
      }
     
    });
  }

  onSubmit()
  {

    let apiUrl = ConstantComponent.API_URL+`store_manufacturer_data`;
    return this.http.post(apiUrl,this.add_manufacturur.value).subscribe(response => {
      console.log(response)
      if(response['success'] == true)
      {
       
        this.successMessage = "Data is successfully Stored";
        this.success_show = true;
        this.error_show = false;
        this.get_manufacturer_data();
        this.add_manufacturur.reset();
      
      }else{
        this.errorMessage = response['info'];
        this.error_show = true;
        this.success_show = false;
       
      }
     
    });

  }

}
