<?php

class CartDAO {
	
	private $dbh;
	
	public function __construct($host,$user,$pass,$db)	{		
		$this->dbh = new PDO("mysql:host=".$host.";dbname=".$db,$user,$pass);		
	}

	public function getCart(){				
		$carts = $this->dbh->prepare("SELECT carts.id, carts.type_id_fk, carts.color_id_fk, carts.quantity, carts.created, carts.deliver_by, carts.status, carts.email, widget_type.id, widget_type.type, color.id, color.color, status.id, status.status FROM carts, widget_type, color, status WHERE carts.type_id_fk=widget_type.id AND carts.color_id_fk = color.id AND carts.status = status.id");
                $carts->execute();
                return json_encode($carts->fetchAll());
	}
        
        public function getParticulars(){
                $attrs = $this->dbh->prepare("SELECT color.id, color.color, widget_type.id, widget_type.type FROM color, widget_type");
                $attrs->execute();
                $fp = fopen('selections.json', 'w');
                fwrite($fp, json_encode($attrs->fetchAll(), JSON_FORCE_OBJECT));  
                fclose($fp);
        }    
       
	public function add($cart){
                $sth = $this->dbh->prepare("INSERT INTO carts(type_id_fk, color_id_fk, quantity, deliver_by, email) VALUES (?, ?, ?, ?, ?)");
		$sth->execute(array($cart->type, $cart->color, $cart->quantity, $cart->deliver_by, $cart->email));		
                return json_encode($this->dbh->lastInsertId());
	}
                
	public function delete($cart){				
		$sth = $this->dbh->prepare("DELETE FROM carts WHERE id=?");
		$sth->execute(array($cart->id));
		return json_encode(1);
	}
	
	public function updateValue($cart){		
		$sth = $this->dbh->prepare("UPDATE carts SET ". $cart->field ."=? WHERE id=?");
		$sth->execute(array($cart->newvalue, $cart->id));				
		return json_encode(1);	
	}
}
?>