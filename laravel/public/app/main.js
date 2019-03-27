(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manufacturer_add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manufacturer/add/add.component */ "./src/app/manufacturer/add/add.component.ts");
/* harmony import */ var _manufacturer_add_model_add_model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manufacturer/add-model/add-model.component */ "./src/app/manufacturer/add-model/add-model.component.ts");
/* harmony import */ var _template_middle_middle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template/middle/middle.component */ "./src/app/template/middle/middle.component.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");







var routes = [
    // {path:'', component:AddComponent},
    // {path:'manufacturer/add', component:AddComponent},
    {
        path: '',
        component: _template_middle_middle_component__WEBPACK_IMPORTED_MODULE_5__["MiddleComponent"],
        children: [
            {
                path: 'manufacturer/add',
                component: _manufacturer_add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"]
            },
            {
                path: '',
                component: _manufacturer_add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"]
            },
            {
                path: 'add/model',
                component: _manufacturer_add_model_add_model_component__WEBPACK_IMPORTED_MODULE_4__["AddModelComponent"]
            },
            {
                path: 'inventory',
                component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_6__["InventoryComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _manufacturer_add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manufacturer/add/add.component */ "./src/app/manufacturer/add/add.component.ts");
/* harmony import */ var _template_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./template/header/header.component */ "./src/app/template/header/header.component.ts");
/* harmony import */ var _template_middle_middle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template/middle/middle.component */ "./src/app/template/middle/middle.component.ts");
/* harmony import */ var _template_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./template/footer/footer.component */ "./src/app/template/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _manufacturer_add_model_add_model_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./manufacturer/add-model/add-model.component */ "./src/app/manufacturer/add-model/add-model.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _manufacturer_add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"],
                _template_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _template_middle_middle_component__WEBPACK_IMPORTED_MODULE_9__["MiddleComponent"],
                _template_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_12__["InventoryComponent"],
                _manufacturer_add_model_add_model_component__WEBPACK_IMPORTED_MODULE_13__["AddModelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPaginationModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




// import { Headers, RequestOptions } from '@angular/http';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Access-Control-Allow-Origin': '*', 'Accept': 'application/json',
        'Content-Type': 'application/json' })
};
var CommonService = /** @class */ (function () {
    function CommonService(http, router) {
        this.http = http;
        this.router = router;
        this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    }
    CommonService.prototype.get_data_by_post = function (postdata) {
        return this.http.post("http://127.0.0.1:8000/index.php/api/get_manufacturer_data", postdata, httpOptions).subscribe(function (response) {
            //console.log(response);
            return response;
            // if(response['ERROR_CODE'] == 0)
            // {
            // }else{
            //   this.router.navigate(['/login']);
            // }
            // console.log("postdata");
        });
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/inventory/inventory.component.css":
/*!***************************************************!*\
  !*** ./src/app/inventory/inventory.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/inventory/inventory.component.html":
/*!****************************************************!*\
  !*** ./src/app/inventory/inventory.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/add/model\" style='float:right'><button type=\"button\" class=\"btn btn-primary\">Add Model</button></a>\n<div class=\"container-floud\" >\n    <table class=\"table\">\n        <thead>\n          <tr>\n            <th>No.</th>\n            <th>Manufacturer Name</th>\n            <th>Color</th>\n            <th>Manufacturer year</th>\n            <th>Registration Number</th>\n            <th>Note</th>\n            <th>Images</th>\n            <th>Created Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let value of model_list; let i = index\">\n            <td>{{i+1}}</td>\n            <td>{{value.manufacturer_name}}</td>\n            <td>{{value.color}}</td>\n            <td>{{value.manufacturing_year}}</td>\n            <td>{{value.registration_number}}</td>\n            <td>{{value.note}}</td>\n            <td>\n              <span *ngFor=\"let image of value.images; let i = index\"><a href=\"public/files/{{image}}\"><img src=\"public/files/{{image}}\"  width=\"42\" height=\"42\">\n                </a></span>\n            </td>\n            <td>{{value.created_at | date:'medium'}}</td>\n          </tr>\n         \n        </tbody>\n      </table>\n      </div>"

/***/ }),

/***/ "./src/app/inventory/inventory.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inventory/inventory.component.ts ***!
  \**************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");




var InventoryComponent = /** @class */ (function () {
    function InventoryComponent(commonservice, http) {
        this.commonservice = commonservice;
        this.http = http;
        this.model_list = [];
    }
    InventoryComponent.prototype.ngOnInit = function () {
        this.get_model_data();
    };
    InventoryComponent.prototype.get_model_data = function () {
        var _this = this;
        return this.http.get("http://127.0.0.1:8000/index.php/api/get_model_data").subscribe(function (response) {
            console.log(response);
            if (response['success'] == true) {
                _this.model_list = response['data'];
                _this.model_list.map(function (v) {
                    v['created_at'] = new Date();
                    v['images'] = JSON.parse(v['images']);
                    return v;
                });
                // console.log("modelList",this.model_list);
                // this.errorMessage = "";
                // this.successMessage = "Data is successfully Stored";
                // this.success_show = true;
                // this.router.navigate(['/orderdetails',response['DATA']['responce_id']]);
            }
            else {
                // this.errorMessage = response['info'];
                // this.error_show = true;
                // this.successMessage = "";
            }
        });
    };
    InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.css */ "./src/app/inventory/inventory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/manufacturer/add-model/add-model.component.css":
/*!****************************************************************!*\
  !*** ./src/app/manufacturer/add-model/add-model.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbnVmYWN0dXJlci9hZGQtbW9kZWwvYWRkLW1vZGVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/manufacturer/add-model/add-model.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/manufacturer/add-model/add-model.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h2>Add model</h2>\n    <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success_show\">\n        {{successMessage}}\n      </div>\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error_show\">\n          {{errorMessage}}\n      </div>\n    <form novalidate [formGroup]='add_model' (ngSubmit) = \"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n          <div class=\"form-group\">\n              <label for=\"sel1\">Select Manufacturer</label>\n              <select class=\"form-control\" formControlName=\"manufacturer_id\" id=\"sel1\">\n                <option value=\"\">Select Manufacturer</option>\n                <option *ngFor=\"let value of manufacturer_list; let i = index\" value=\"{{value.id}}\">{{value.manufacturer_name}}</option>\n               \n              </select>\n            </div> \n      </div>\n      <div class=\"col-sm-9\">\n          <div class=\"form-group\">\n              <label for=\"\">Color</label>\n              <input type=\"text\" name=\"color\" class=\"form-control\" formControlName=\"color\" aria-describedby=\"emailHelp\" placeholder=\"Enter color\">\n          </div>\n          <div class=\"form-group\">\n              <label for=\"\">Manufacturing Year</label>\n              <input type=\"number\" name=\"color\" class=\"form-control\" formControlName=\"manufacturing_year\" aria-describedby=\"emailHelp\" placeholder=\"Enter Manufacturing Year\">\n          </div>\n          <div class=\"form-group\">\n              <label for=\"\">Registration Number</label>\n              <input type=\"text\" name=\"registration_number\" class=\"form-control\" formControlName=\"registration_number\" aria-describedby=\"emailHelp\" placeholder=\"Enter Registration Number\">\n          </div>\n          <div class=\"form-group\">\n              <label for=\"\">Note</label>\n              <input type=\"text\" name=\"note\" class=\"form-control\" formControlName=\"note\" aria-describedby=\"emailHelp\" placeholder=\"Enter Note\">\n          </div>\n          <div class=\"form-group\">\n              <label for=\"\">Upload Imeges</label>\n              <input type=\"file\" class=\"form-control\" (change)=\"onfileselected($event)\" multiple>\n          </div>\n          <!-- <div class=\"form-group\">\n            <label for=\"\">Upload Imeges 2</label>\n            <input type=\"file\" class=\"form-control\" (change)=\"onfileselected($event)\" >\n        </div> -->\n          <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n          </div>\n      </div>\n    </div>\n    </form>\n    </div>\n  "

/***/ }),

/***/ "./src/app/manufacturer/add-model/add-model.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/manufacturer/add-model/add-model.component.ts ***!
  \***************************************************************/
/*! exports provided: AddModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModelComponent", function() { return AddModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common.service */ "./src/app/common.service.ts");





var AddModelComponent = /** @class */ (function () {
    function AddModelComponent(commonservice, http) {
        this.commonservice = commonservice;
        this.http = http;
        this.successMessage = "";
        this.errorMessage = "";
        this.error_show = false;
        this.success_show = false;
        this.manufacturer_list = [];
        this.selectedfile = null;
        this.file_array = [];
        this.add_model = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            manufacturer_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            manufacturing_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            registration_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            files: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([])
        });
    }
    AddModelComponent.prototype.ngOnInit = function () {
        this.get_manufacturer_data();
    };
    AddModelComponent.prototype.onfileselected = function (event) {
        // this.selectedfile = <File>event.target.files;
        for (var i = 0; i < event.target.files.length; i++) {
            this.file_array.push(event.target.files[i]);
        }
        //   if (event.target.files && event.target.files[0]) {
        //     var filesAmount = event.target.files.length;
        //     for (let i = 0; i < filesAmount; i++) {
        //             this.file_array.push(event.target.file[i]);
        //     }
        // }
        // console.log(this.file_array );
    };
    AddModelComponent.prototype.get_manufacturer_data = function () {
        var _this = this;
        return this.http.get("http://127.0.0.1:8000/index.php/api/get_manufacturer_data").subscribe(function (response) {
            if (response['success'] == true) {
                _this.manufacturer_list = response['data'];
                console.log("list");
                console.log(_this.manufacturer_list);
                // this.errorMessage = "";
                // this.successMessage = "Data is successfully Stored";
                // this.success_show = true;
                // this.router.navigate(['/orderdetails',response['DATA']['responce_id']]);
            }
            else {
                // this.errorMessage = response['info'];
                // this.error_show = true;
                // this.successMessage = "";
            }
        });
    };
    AddModelComponent.prototype.onSubmit = function () {
        var _this = this;
        var cd = new FormData();
        for (var i = 0; i < this.file_array.length; i++) {
            cd.append("images[]", this.file_array[i]);
        }
        // console.log(cd);
        // cd.append('images',this.selectedfile);
        return this.http.post("http://127.0.0.1:8000/index.php/api/upload_file", cd).subscribe(function (response) {
            console.log(response);
            if (response['success'] == true) {
                console.log(response);
                _this.add_model.patchValue({ files: response['data'] });
                //this.file_array.push(response['data']);
                // this.errorMessage = "";
                //   this.successMessage = "Data is Successfully Stored";
                //   this.success_show = true;
                _this.error_show = false;
                _this.add_data();
                //   this.get_manufacturer_data();
                //   this.add_model.reset();
                //  // this.router.navigate(['/orderdetails',response['DATA']['responce_id']]);
            }
            else {
                _this.errorMessage = response['info'];
                _this.error_show = true;
                _this.success_show = false;
                //   // this.successMessage = "";
            }
        });
        //this.add_model.value.files.push(cd);
        // console.log(this.add_model.value);
        // this.add_model.value.files.push(this.selectedfile.name);
        // console.log(this.add_model.value);
    };
    AddModelComponent.prototype.add_data = function () {
        var _this = this;
        return this.http.post("http://127.0.0.1:8000/index.php/api/store_model_data", this.add_model.value).subscribe(function (response) {
            console.log(response);
            if (response['success'] == true) {
                // this.errorMessage = "";
                _this.successMessage = "Data is Successfully Stored";
                _this.success_show = true;
                _this.error_show = false;
                _this.get_manufacturer_data();
                _this.add_model.reset();
                // this.router.navigate(['/orderdetails',response['DATA']['responce_id']]);
            }
            else {
                _this.errorMessage = response['info'];
                _this.error_show = true;
                _this.success_show = false;
                // this.successMessage = "";
            }
        });
    };
    AddModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-model',
            template: __webpack_require__(/*! ./add-model.component.html */ "./src/app/manufacturer/add-model/add-model.component.html"),
            styles: [__webpack_require__(/*! ./add-model.component.css */ "./src/app/manufacturer/add-model/add-model.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AddModelComponent);
    return AddModelComponent;
}());



/***/ }),

/***/ "./src/app/manufacturer/add/add.component.css":
/*!****************************************************!*\
  !*** ./src/app/manufacturer/add/add.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbnVmYWN0dXJlci9hZGQvYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/manufacturer/add/add.component.html":
/*!*****************************************************!*\
  !*** ./src/app/manufacturer/add/add.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n    <a routerLink=\"/add/model\" style='float:right'><button type=\"button\" class=\"btn btn-primary\">Add Model</button></a>\n    <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success_show\">\n        {{successMessage}}\n      </div>\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error_show\">\n          {{errorMessage}}\n      </div>\n  <form novalidate [formGroup]='add_manufacturur' (ngSubmit) = \"onSubmit()\">\n    <div class=\"col-md-6\">\n    <div class=\"form-group\">\n      <label for=\"\">Manufacturer Name</label>\n      <input type=\"text\" name=\"manufacturer_name\" class=\"form-control\" formControlName=\"manufacturer_name\" aria-describedby=\"emailHelp\" placeholder=\"Enter Manufacturer Name\">\n    </div>\n    \n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </div>\n  </form> \n</div>\n\n<div class=\"container\" >\n<table class=\"table\">\n    <thead>\n      <tr>\n        <th>No.</th>\n        <th>Manufacturer Name</th>\n        <th>Created Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let value of manufacturer_list; let i = index\">\n        <td>{{i+1}}</td>\n        <td>{{value.manufacturer_name}}</td>\n        <td>{{value.created_at}}</td>\n      </tr>\n     \n    </tbody>\n  </table>\n  </div>"

/***/ }),

/***/ "./src/app/manufacturer/add/add.component.ts":
/*!***************************************************!*\
  !*** ./src/app/manufacturer/add/add.component.ts ***!
  \***************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common.service */ "./src/app/common.service.ts");





var AddComponent = /** @class */ (function () {
    function AddComponent(commonservice, http) {
        this.commonservice = commonservice;
        this.http = http;
        this.successMessage = "";
        this.errorMessage = "";
        this.error_show = false;
        this.success_show = false;
        this.manufacturer_list = [];
        this.add_manufacturur = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            manufacturer_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    AddComponent.prototype.ngOnInit = function () {
        this.get_manufacturer_data();
    };
    AddComponent.prototype.get_manufacturer_data = function () {
        var _this = this;
        return this.http.get("http://127.0.0.1:8000/index.php/api/get_manufacturer_data").subscribe(function (response) {
            console.log(response);
            if (response['success'] == true) {
                _this.manufacturer_list = response['data'];
                // this.errorMessage = "";
                // this.successMessage = "Data is successfully Stored";
                // this.success_show = true;
                // this.router.navigate(['/orderdetails',response['DATA']['responce_id']]);
            }
            else {
                _this.errorMessage = response['info'];
                _this.error_show = true;
                // this.successMessage = "";
            }
        });
    };
    AddComponent.prototype.onSubmit = function () {
        //this.response = this.commonservice.get_data_by_post(this.add_manufacturur.value);
        var _this = this;
        return this.http.post("http://127.0.0.1:8000/index.php/api/store_manufacturer_data", this.add_manufacturur.value).subscribe(function (response) {
            console.log(response);
            if (response['success'] == true) {
                // this.errorMessage = "";
                _this.successMessage = "Data is successfully Stored";
                _this.success_show = true;
                _this.error_show = false;
                _this.get_manufacturer_data();
                _this.add_manufacturur.reset();
                // this.router.navigate(['/orderdetails',response['DATA']['responce_id']]);
            }
            else {
                _this.errorMessage = response['info'];
                _this.error_show = true;
                _this.success_show = false;
                // this.successMessage = "";
            }
        });
        console.log(this.response);
        // console.log(this.add_manufacturur.value);
    };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/manufacturer/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/manufacturer/add/add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/template/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/template/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/template/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/template/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/template/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/template/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/template/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/template/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/template/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/template/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/template/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/template/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Mini Car Inventory System</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/manufacturer/add\">Manufacturer List <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/inventory\">Inventory <span class=\"sr-only\">(current)</span></a>\n        </li>\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Features</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Pricing</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li> -->\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/template/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/template/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/template/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/template/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/template/middle/middle.component.css":
/*!******************************************************!*\
  !*** ./src/app/template/middle/middle.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL21pZGRsZS9taWRkbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/template/middle/middle.component.html":
/*!*******************************************************!*\
  !*** ./src/app/template/middle/middle.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/template/middle/middle.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/template/middle/middle.component.ts ***!
  \*****************************************************/
/*! exports provided: MiddleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddleComponent", function() { return MiddleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MiddleComponent = /** @class */ (function () {
    function MiddleComponent() {
    }
    MiddleComponent.prototype.ngOnInit = function () {
    };
    MiddleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-middle',
            template: __webpack_require__(/*! ./middle.component.html */ "./src/app/template/middle/middle.component.html"),
            styles: [__webpack_require__(/*! ./middle.component.css */ "./src/app/template/middle/middle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MiddleComponent);
    return MiddleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/technical_test/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map