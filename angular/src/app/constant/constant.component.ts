import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constant',
  templateUrl: './constant.component.html',
  styleUrls: ['./constant.component.css']
})
export class ConstantComponent implements OnInit {

  public static get HOME_URL(): string { return "http://127.0.0.1:8000/"; };
  public static get API_URL(): string { return "http://127.0.0.1:8000/index.php/api/"; };
  
  constructor() { }

  ngOnInit() {
  }

}
