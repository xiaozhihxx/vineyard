<?php
	
namespace app\controllers;

use yii\web\Controller;
use yii\data\Pagination;
use app\models\UserInfo;

class UserController extends Controller {

	/**
	 * 用户信息的初始页面 
	 * Pagination提供了为数据结果分页的所有功能
	 * 首先Pagination把select的子查询limit x offset y数据表示成第一页；
	 * 然后小部件LinkPager使用Pagination::createUrl()方法生成的Url去渲染翻页按钮；
	 */
	public function actionIndex() {
		$query = UserInfo::find();

		$pagination = new Pagination([
			'defaultPageSize' => 5,
			'totalCount' => $query->count()
		]);

		$users = $query->orderBy('name')
		    ->offset($pagination->offset)
		    ->limit($pagination->limit)
		    ->all();

		return $this->render('index', ['users' => $users, 'pagination' => $pagination]);
	}
}

?>