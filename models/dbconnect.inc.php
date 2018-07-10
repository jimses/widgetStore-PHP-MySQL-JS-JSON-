<?php
date_default_timezone_set('America/New_York');
class Database{
    private static $_instance;
    private $DB_host="localhost";
    private $username="root";
    private $DB_name="widgets";
    private $DB_pass="root";


    public static function getInstance(){
        if(!self::$_instance){ // If no instance make one
              self::$_instance = new self();
        }
              return self::$_instance;
    }

  private function __construct() {
      try {
        $this->conn = new PDO("mysql:host=$this->DB_host;dbname=$this->DB_name;charset=utf8mb4", $this->username, $this->DB_pass,array(PDO::ATTR_EMULATE_PREPARES => false, PDO::ATTR_ERRMODE =>PDO::ERRMODE_EXCEPTION));

          //$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          //echo 'Connected successfully';
      }
      catch(PDOException $e)
          {
          echo 'Connection failed: ' . $e->getMessage();
      }

  }
  private function __clone() { }

  public function getConnection() {
    return $this->conn;
  }
}
?>
