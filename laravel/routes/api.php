<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['Cors']], function () {
	Route::post('store_manufacturer_data','manufacturerController@storeManufacturerData')->name('store_manufacturer_data'); 
	Route::get('get_manufacturer_data','manufacturerController@getManufacturerData')->name('get_manufacturer_data'); 
	Route::post('store_model_data','manufacturerController@storeModelData')->name('store_model_data'); 
	Route::get('get_model_data','manufacturerController@getModelData')->name('get_model_data'); 
	Route::post('upload_file','manufacturerController@uploadFile')->name('upload_file'); 
});