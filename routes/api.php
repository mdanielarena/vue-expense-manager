<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     print_r($request->user());die;
//     return $request->user();
// });

//roles
Route::get('/roles-fetch-data','Roles@fetchData');
Route::post('/roles-store-data','Roles@store');
Route::delete('/roles-delete-data','Roles@delete');
Route::patch('/roles-update-data','Roles@update');

//users
Route::get('/users-fetch-data','Users@fetchData');
Route::post('/users-add-user','Users@store');
Route::delete('/users-delete-user','Users@delete');
Route::patch('/users-update-user','Users@update');

//expense categories
Route::get('/expense-categories','ExpenseCategories@fetchData');
Route::post('/expense-categories-add','ExpenseCategories@store');
Route::delete('/expense-categories-delete','ExpenseCategories@destroy');
Route::patch('/expense-categories-update','ExpenseCategories@update');

//expenses
Route::get('/expenses','Expense@fetchData');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', 'Login@authenticate');
Route::post('/logout', 'Login@signout');
