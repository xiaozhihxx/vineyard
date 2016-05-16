<?php
	
namespace app\controllers;

use Yii;
use yii\web\Controller;
use app\models\EntryForm;
use app\models\userInfo;

class DemoController extends Controller {
	public function actionSay($message = 'Hello') {
        return $this->render('index', ['message' => $message]);
    } 

    /**
     * 为什么在表单提交的时候，可以在不需要刷新页面的情况下给予错误提示呢？
     * 解释：数据首先由客户端JS脚本验证，然后才会提交给服务器通过PHP验证，
     * 注意：客户端验证是提高用户体验的手段，无论它是否正常启用，服务端验证规则都是必须的。
     */
    public function actionEntry() {
    	$model = new EntryForm();

    	if ($model->load(Yii::$app->request->post()) && $model->validate()) {
    		// 验证 $model 收到的数据

    		// 做些有意义的事情
    		return $this->render('entryconfirm', ['model' => $model]);
    	}
    	else {
    		// 无论是初始化显示还是数据验证错误
    		return $this->render('entry', ['model' => $model]);
    	}
    }

    /**
     * 用户列表 
     */
    public function actionUserList() {
    	// 获取userInfo表的所有行，并以id排序
    	$userInfoList = UserInfo::find()->orderBy('id')->all();

    	// 获取主键为1的行
    	$user = UserInfo::findOne('1');

    	echo $user->name;

    	$user->name = 'hxx';
    	$user->save();
    }
}

?>
