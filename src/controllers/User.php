<?php

namespace App\Controllers;

class User {
  protected array $params;
  protected string $reqMethod;

  public function __construct($params) {
    $this->params = $params;
    $this->reqMethod = strtolower($_SERVER['REQUEST_METHOD']);

    $this->run();
  }

  protected function getUser() {
    return [
      'firstName' => 'Cyril',
      'lastName' => 'Vimard',
      'promo' => 'B1',
      'school' => 'Coda'
    ];
  }

  protected function header() {
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json; charset=utf-8');
  }


  protected function ifMethodExist() {
    $method = $this->reqMethod.'User';

    if (method_exists($this, $method)) {
      echo json_encode($this->$method());

      return;
    }

    header('HTTP/1.0 404 Not Found');
    echo json_encode([
      'code' => '404',
      'message' => 'Not Found'
    ]);

    return;
  }

  protected function run() {
    $this->header();
    $this->ifMethodExist();
  }
}
