<?php
  $pathToJsonForms = '../../resources/jsonForms/';

  session_start();
  $data = json_decode(file_get_contents("php://input"));

  $wipFile =  str_replace("pdf","wip",$data->formName);
  $json_url = $pathToJsonForms . $wipFile;
  $json = file_get_contents($json_url);
  echo($json);

?>