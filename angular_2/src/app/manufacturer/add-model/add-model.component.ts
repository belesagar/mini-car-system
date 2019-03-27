import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators,FormControl,FormArray } from '@angular/forms';
import { CommonService } from '../../common.service';
import { ConstantComponent } from '../../constant/constant.component';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {
  successMessage: string = "";
  errorMessage: string = "";
  error_show: boolean = false;
  success_show: boolean = false;
  manufacturer_list: [] = [];

  selectedfile:File = null;
  file_array = [];
  add_model = new FormGroup({
    manufacturer_id: new FormControl(''),
    color: new FormControl(''),
    manufacturing_year: new FormControl(''),
    registration_number: new FormControl(''),
    note: new FormControl(''),
    files: new FormControl([])
  });

  constructor(private commonservice: CommonService,private http: HttpClient) { }

  ngOnInit() {
    this.get_manufacturer_data();
  }
  
  //This code for uploading file 
  onfileselected(event)
  {
    if (event.target.files && event.target.files[0]) {
      for (var i = 0; i < event.target.files.length; i++) { 
        this.file_array.push(event.target.files[i]);
      }
    }
  
     
  }

  get_manufacturer_data()
  {
    let apiUrl = ConstantComponent.API_URL+`get_manufacturer_data`;
    return this.http.get(apiUrl).subscribe(response => {
      if(response['success'] == true)
      {
        this.manufacturer_list = response['data'];
       
      }
     
    });
  }

  onSubmit()
  {
    const cd = new FormData();

    for (var i = 0; i < this.file_array.length; i++) { 
      cd.append("images[]", this.file_array[i]);
    }

  //This api for upload file
  let apiUrl = ConstantComponent.API_URL+`upload_file`;
   return this.http.post(apiUrl,cd).subscribe(response => {
    console.log(response);
    if(response['success'] == true)
    {
      
      this.add_model.patchValue({files: response['data']});
     
      this.error_show = false;
      this.add_data();

   
    }else{
      this.errorMessage = response['info'];
      this.error_show = true;
      this.success_show = false;
  
    }
   
  });
    
  }

  //This code for storing model data
  add_data()
  {
    let apiUrl = ConstantComponent.API_URL+`store_model_data`;
    return this.http.post(apiUrl,this.add_model.value).subscribe(response => {
      console.log(response)
      if(response['success'] == true)
      {
        
        this.successMessage = "Data is Successfully Stored";
        this.success_show = true;
        this.error_show = false;
        this.get_manufacturer_data();
        this.add_model.reset();
      
      }else{
        this.errorMessage = response['info'];
        this.error_show = true;
        this.success_show = false;
        
      }
     
    });
  }

}
