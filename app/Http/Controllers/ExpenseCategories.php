<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExpenseCategories extends Controller
{
    public function fetchData(Request $request) {
        $categories = \App\Models\ExpenseCategories::all();
        return response()->json(base64_encode($categories));
    }

    public function store(Request $request) {
        
        $categories = \App\Models\ExpenseCategories::create([
            "name" => $request->input('name'),
            "description" => $request->input('description'),
        ]);

        return response()->json(base64_encode($categories));
    }

    public function destroy(Request $request) {

        \App\Models\ExpenseCategories::destroy($request->input('id'));
        return response()->json(base64_encode($request->input('id')));
    }

    public function update(Request $request) {

        $id = $request->input('data')['id'];
        $name = $request->input('data')['name'];
        $description = $request->input('data')['description'];
        
        $category = \App\Models\ExpenseCategories::find($id);
        $category->name = $name;
        $category->description = $description;
        $category->save();

        $array = array(
            "id"=> $id,
            "name"=> $name,
            "description"=> $description,
        );

        return response()->json(base64_encode(json_encode($array)));

    }
}
