<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class Expense extends Controller
{
    public function fetchData(Request $request) {
        
        $expense = DB::table('expense')
            ->select('expense.id','expense.user_id','expense.ec_id','expense.amount','expense.entry_date','expense.created_at','expense_categories.name')
            ->leftJoin('expense_categories', 'expense.ec_id', '=', 'expense_categories.id')
            ->where('expense.user_id',Auth::user()->id)
            ->get();

        return response()->json(base64_decode($expense));
    }
}
