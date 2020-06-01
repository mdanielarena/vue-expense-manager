<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Laravel\Sanctum\HasApiTokens;

class Users extends Controller
{

    use HasApiTokens;

    public function fetchData(Request $request) {
        $users = DB::table('users')
            ->select('users.id','users.username','users.email','users.role_id','roles.name','roles.description')
            ->leftJoin('roles', 'users.role_id', '=', 'roles.id')
            ->get();
        return response()->json(base64_encode($users));
    }

    public function store(Request $request) {

        $users = \App\Models\Users::create([
            'username'=> $request->input('username'),
            'email'=> $request->input('email'),
            'password'=> bcrypt($request->input('password')),
            'role_id'=> $request->input('role'),
        ]);

        return response()->json(base64_encode($users));
    }

    public function delete(Request $request) {
        \App\Models\Users::destroy($request->input('id'));
        return response()->json(base64_encode($request->input('id')));
    }

    public function update(Request $request) {

        $user = \App\Models\Users::find($request->input('data')['id']); 
        $user->username = $request->input('data')['username'];
        $user->role_id  = $request->input('data')['role_id'];
        $user->email    = $request->input('data')['email'];
        $user->save();

        $data = array(
            "id"=> $request->input('data')['id'],
            "username"=> $request->input('data')['username'],
            "email"=> $request->input('data')['email'],
            "role_id"=> $request->input('data')['role_id'],
            "name"=> $request->input('data')['name'],
        );
        
        return response()->json(base64_encode(json_encode($data)));
    }
}
