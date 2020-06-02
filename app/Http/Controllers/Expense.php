<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Auth;

class Expense extends Controller
{
    public function fetchData(Request $request) {
        
        $expense = DB::table('expense')
            ->select('expense.id','expense.user_id','expense.ec_id','expense.amount','expense.entry_date','expense.created_at','expense_categories.name')
            ->leftJoin('expense_categories', 'expense.ec_id', '=', 'expense_categories.id')
            ->where('expense.user_id',Auth::user()->id)
            ->get();
        
        return response()->json(base64_encode($expense));

    }

    public function store(Request $request) {

        $user_id = Auth::user()->id;
        $amount = $request->amount;
        $ec_id = $request->ec_id;
        $date = $request->date;

        $expense = \App\Models\Expense::create([
            'ec_id'=> $ec_id,
            'user_id'=> $user_id,
            'amount'=> $amount,
            'entry_date'=> $date,
        ]);

        return response()->json(base64_encode($expense));
    }

    public function destroy(Request $request) {

        \App\Models\Expense::destroy($request->id);
        return response()->json(base64_encode($request->id));
    }

    public function update(Request $request) {

        $id = $request->data['id'];
        $ec_id = $request->data['ec_id'];
        $name = $request->data['name'];
        $amount = $request->data['amount'];
        $entry_date = $request->data['entry_date'];

        $expense = \App\Models\Expense::find($id);
        $expense->ec_id = $ec_id;
        $expense->amount = $amount;
        $expense->entry_date = $entry_date;
        $expense->save();
        
        $data = array(
            "id"=> $id,
            "name"=> $name,
            "ec_id"=> $ec_id,
            "amount"=> $amount,
            "entry_date"=> $entry_date
        );
        
        return response()->json(base64_encode(json_encode($data)));
    }
}
