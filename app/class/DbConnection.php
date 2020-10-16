<?php

class DbConnection
{
  protected static $connection;

  // function __create() {
  // DB Name:  ocfrdb

  // }

    static function getConnection() {
      if (self::$connection) {
        return self::$connection;
      }

      try {
          $dsn = 'mysql:host='.getenv('ocfrdb.ctssamz9gg38.us-east-1.rds.amazonaws.com ').';dbname='.getenv('ocfrdb').';charset=utf8';
          error_log($dsn);
          self::$connection = new PDO(
             $dsn,
             getenv('Glizzy'),
             getenv('teamglizzy'),
             [
                 PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                 PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                 PDO::ATTR_EMULATE_PREPARES   => false
             ]
           );
      } catch (\PDOException $e) {
          throw new \PDOException($e->getMessage(), (int)$e->getCode());
      }
      return self::$connection;
    }
}
