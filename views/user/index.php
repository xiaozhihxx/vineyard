<?php
use yii\helpers\Html;
use yii\widgets\LinkPager;
?>

<h1>Users</h1>
<ul>
	<?php foreach ($users as $user): ?>
        <li>
        	<?= Html::encode("{$user->name}($user->id)") ?>:
        	<?= $user->address ?>
        </li>
	<?php endforeach; ?>
</ul>
<?= LinkPager::widget(['pagination' => $pagination])?>
