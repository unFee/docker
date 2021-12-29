<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SampleController;
use App\Http\Controllers\Auth\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// 動作確認用
Route::get('/redis_test', [SampleController::class, 'redis']);
Route::get('/db_test', [SampleController::class, 'db']);
Route::get('/test', function () {
    return view('welcome');
});

// Auth::routes(); -- デフォルトのルーティング。一目で何を行なっているかを把握できないので書き直す。
Route::redirect('/', '/login');
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('login', [LoginController::class, 'login']);
Route::post('logout', [LoginController::class, 'logout'])->name('logout');

Route::group(['middleware' => ['auth']], function() {
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

    // ユーザ登録処理 (招待制にするので、ログイン必須)
    Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
    Route::post('register', 'Auth\RegisterController@register');
});
