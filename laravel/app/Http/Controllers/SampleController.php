<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Redis;

/**
 * @SuppressWarnings(PHPMD.CouplingBetweenObjects)
 */
class SampleController extends Controller
{
    public function redis()
    {
        // redis 動作確認用
        $this->redis = Redis::connection('default');
        $this->redis->set('laravel', '2217');

        return "redis";
    }

    public function db()
    {
        // db接続 動作確認用
        $user = new User;
        return $user->find(1)->get()->toArray();
    }
}
