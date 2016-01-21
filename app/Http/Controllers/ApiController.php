<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function ping (Request $request) {
        return response()->json("PONG");
    }
    public function notfound (Request $request) {
        return response()->json("NotFound", 404);
    }
    public function badrequest (Request $request) {
        return response()->json("BadRequest", 400);
    }
}
