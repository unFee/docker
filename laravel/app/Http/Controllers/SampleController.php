<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Redis;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

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

    public function api(Request $request): JsonResponse
    {
        sleep(5);
        $array = [
            'title' => 'testAPI',
            'name' => $request->name
        ];
        return response()->json($array);
    }
}
