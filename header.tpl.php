<!DOCTYPE html>
<html dir="ltr" lang="ru-RU"> 
<head>
<?
$this->tpl('_/head', array());
//wp_head();
?>
</head>
<?
if(is_front_page()) {
	$class_patch = 'body-index-page';
} else {
	$class_patch = '';
}
if($this->post['id'] == 5853 || $this->post['id'] == 5855) {
	$class_patch = $class_patch.' body-yandex-map';
}

?>
<body <?php body_class('fecss '.$class_patch); ?> data-theme="starry" >
