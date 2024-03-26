<?php

namespace App\Controllers;

class Messages {
  protected array $params;
  protected string $reqMethod;

  public function __construct($params) {
    $this->params = $params;
    $this->reqMethod = strtolower($_SERVER['REQUEST_METHOD']);

    $this->run();
  }

  protected function getMessages() {
    $message = [
      'author' => 'Cyril Vimard',
      'avatar' => 'https://media.wired.com/photos/59271340ac01987bf0138709/1:1/w_200,h_200,c_limit/SpiderMan.jpg',
      'type' => 'bot',
      'date' => '25/03/2024',
      'text' => 'Hello World',
      'toto' => 'tutu'
    ];
    return [
      $message,
      $message,
      $message,
      $message
    ];
  }

  protected function header() {
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json; charset=utf-8');
  }

  protected function ifMethodExist() {
    $method = $this->reqMethod.'Messages';

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
