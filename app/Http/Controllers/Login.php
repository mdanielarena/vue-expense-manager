<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;

class Login extends Controller
{
    
    public function index(Request $request) {
        print_R('test');die;
    }

    public function authenticate(Request $request) {

        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        $auth = auth()->attempt($request->only('username','password'));

        if($auth){
            $roles = \App\Models\Roles::where('id',auth()->user()->role_id)->first();
            auth()->user()->role_name = $roles->name;
        }
        
        return auth()->user();
        

        // auth()->user()->role_name = $roles->name;
        // return auth()->user();

        // $users = DB::table('users')
        //     ->select('users.id','users.username','users.email','users.role_id','roles.name','roles.description')
        //     ->leftJoin('roles', 'users.role_id', '=', 'roles.id')
        //     ->where('users.id',auth()->user()->id)
        //     ->get();
        
        // return $users;
        
    }

    public function signout(Request $request) {
        Auth::logout();
        return 'ok';
    }

}
