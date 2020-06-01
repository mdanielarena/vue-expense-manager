<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Roles extends Controller
{
    public function fetchData() {
        
        $roles = \App\Models\Roles::all();
        return response()->json(base64_encode($roles));
    }

    public function store(Request $request) {
        
        $roles = \App\Models\Roles::create([
            'name'=> $request->input('name'),
            'description'=> $request->input('description'),
        ]);

        return response()->json(base64_encode($roles));
    }

    public function delete(Request $request) {


        $roles = \App\Models\Roles::destroy($request->input('id'));
        return response()->json(base64_encode($request->input('id')));
        
    }

    public function update(Request $request) {

        $data = explode(',',$request->input('data'));

        $id    = $data[0];
        $name  = $data[1];
        $description  = $data[2];

        $role = \App\Models\Roles::find($id);
        $role->name = $name;
        $role->description = $description;
        $role->save();

        $data = array("id"=>$id,"name"=>$name,"description"=>$description,"created_at"=>$role->created_at);
        return response()->json(base64_encode(json_encode($data)));
    }
}
