<?php
function __autoload($className){
	include_once("models/$className.php");
        
}
/*
require "models/Session.php";
$data = Session::getInstance();
$data['name']= "cart";
echo $data['name'];
*/
  $n = rand(0,100000); // with MAX_RAND=32768
//session_destroy();
$widgets=new CartDAO("localhost","root","root","widgets");

if(!isset($_POST['action'])) {
	print json_encode(0);
	return;
}

switch($_POST['action']) {
	case 'get_cart':
		print $widgets->getCart();
                //$widgets->getParticulars();
                
	break;
	
	case 'add_cart':
                //$widgets->getParticulars();
		$cart = new stdClass;
		$cart = json_decode($_POST['cart']);
                //print_r($cart);
		print $widgets->add($cart);		
	break;
	
	case 'delete_cart':
		$cart = new stdClass;
		$cart = json_decode($_POST['cart']);
		print $widgets->delete($cart);		
	break;
	
	case 'update_field_data':
                $widgets->getParticulars();
		$cart = new stdClass;
		$cart = json_decode($_POST['cart']);
		print $widgets->updateValue($cart);				
	break;
}

exit();