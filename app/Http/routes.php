<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return response()->json("Server is Running ...");
});

Route::get('/api/ping', 'ApiController@ping');
Route::get('/api/notfound', 'ApiController@notfound');
Route::post('/api/badrequest', 'ApiController@badrequest');
