<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
// use App\Manufacturer;
use App\Http\Controllers\Controller;
use DB;


class manufacturerController extends Controller
{
    public function storeManufacturerData(Request $request) {
    	$return = array();
    	
    	$validator = Validator::make($request->all(), [
            'manufacturer_name' => 'required|max:100|unique:manufacturer,manufacturer_name',
        ]);

        if ($validator->fails()) {
        	
            $return['success'] = false;
            $return['info'] = implode("\n", $validator->errors()->all());
        }else{
        	$request_data = $request->all();
        	// $data = App\Manufacturer::all();
        	$postData = array(
        		"manufacturer_name" => $request_data['manufacturer_name']
        	);
        	$id = DB::table('manufacturer')->insert(
	            $postData
	        );
        	// $data = DB::table("manufacturer")->get();
        	// $return['data'] = $data;
        	$return['success'] = true;
            $return['info'] = "success";
        }

    	return json_encode($return);
    }

    public function getManufacturerData(Request $request) {
    	$return = array();
    	
    	$data = DB::table("manufacturer")->orderBy('created_at')->get();
    	$return['data'] = $data;
    	$return['success'] = true;
        $return['info'] = "success";
        
    	return json_encode($return);
    }

    public function storeModelData(Request $request) {
    	$return = array();
    	
    	$validator = Validator::make($request->all(), [
            'manufacturer_id' => 'required|max:100',
            'color' => 'required',
            'manufacturing_year' => 'required|numeric|min:4',
            'registration_number' => 'required',
            'note' => 'required',
        ]);

        if ($validator->fails()) {
        	
            $return['success'] = false;
            $return['info'] = implode("\n", $validator->errors()->all());
        }else{
        	$request_data = $request->all();
        	
        	// $data = App\Manufacturer::all();
        	$postData = array(
        		"manufacturer_id" => $request_data['manufacturer_id'],
        		"color" => $request_data['color'],
        		"manufacturing_year" => $request_data['manufacturing_year'],
        		"registration_number" => $request_data['registration_number'],
        		"note" => $request_data['note'],
        		"images" => json_encode($request_data['files']),
        	);
        	
        	$id = DB::table('model')->insert(
	            $postData
	        );
        	// $data = DB::table("manufacturer")->get();
        	// $return['data'] = $data;
        	$return['success'] = true;
            $return['info'] = "success";
        }

    	return json_encode($return);
    }

    public function getModelData(Request $request) {
    	$return = array();
    	
    	$data = DB::table("model as mo")
    	->join('manufacturer as m', 'm.id', '=', 'mo.manufacturer_id')
    	->select('mo.*', 'm.manufacturer_name')
    	->orderBy('created_at')
    	->get();

    	$return['data'] = $data;
    	$return['success'] = true;
        $return['info'] = "success";
        
    	return json_encode($return);
    }

    public function uploadFile(Request $request) {
    	$return = array();
    	$file = $_FILES['images'];
    	$filename = array();
    	$success = 1;
    	for($i = 0;$i<count($file['name']);$i++)
    	{
	    	// return json_encode($request->file('images'));
	    	$ext = pathinfo($file['name'][$i], PATHINFO_EXTENSION);
	    	$ext_array = array('jpg','jpeg','png','pdf');
	    	if(in_array($ext, $ext_array))
	    	{
		    	$unique_file_name = time('ims').$i.".".$ext;
		        $name=public_path().'/files/'.$unique_file_name;

		        if(move_uploaded_file($file['tmp_name'][$i],$name))
		        {
		        	$filename[] = $unique_file_name;
		        }
	    	}else{
				
			    $return['info'] = "Please upload Image or PDF files.";
			    $success = 0;
	    	}
    	}

    	if($success)
    	{
    		$return['data'] = $filename;
			$return['success'] = true;
		    $return['info'] = "success";
    	}else{
    		$return['success'] = false;
    	}

    	return json_encode($return);
    	
    }

}
