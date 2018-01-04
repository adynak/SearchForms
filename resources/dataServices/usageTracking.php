<?php
  $data = json_decode(file_get_contents("php://input"));

  $logFilename = '/adp/logs/ffc/usageTracking.json';
  
  clearstatcache();
  $permissions = fileperms($logFilename);
  if ($permissions != 33204){
    chmod($logFilename,0664);
  }

  if ($data->task == 'trackUsage') {

    $newValues = array(
        "matches" => $data->matchCount,
        "searchPattern" => $data->searchPattern,
        "date" => date("Y-m-d"),
        "time" => date("H:i:s")
    );

    $json = file_get_contents($logFilename);
    if ($json === false){
      $tempArray = array();
    } else {
      $tempArray = json_decode($json);
    }
    array_push($tempArray, $newValues);

    $jsonData = json_encode($tempArray);
  
    $success = file_put_contents($logFilename, $jsonData);

  }
?>
