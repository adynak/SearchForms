<?php

session_start();
$data = json_decode(file_get_contents("php://input"));

if ($data->task == 'search') {
  // sample json in SearchForms/resources/dataServices
  $pageID = $data->pageID;
  $searchPattern = $data->searchPattern;

  $pathToKsh = '/adp/tmp';
  // lets run the ksh from our folder instead of /adp/tmp
  $documentRoot = $_SERVER['DOCUMENT_ROOT'];
  $pathToKsh = $documentRoot . '/paris/ffc/SearchForms/resources/dataServices';

  $cmd  = 'cd /adp/tmp;';
  $cmd  = "cd $pathToKsh;";
  $cmd .= 'ksh ffcSearchForms.ksh ';
  $cmd .= $pageID . ' ';
  $cmd .= $searchPattern;
  $output = shell_exec($cmd);

  $json = file_get_contents("/adp/3party/ffc/formSearch/$pageID.json");
  // remove non-printing characters
  $json = preg_replace('/[\x00-\x1F\x7F-\xFF]/', '', $json);
  // is the json valid?
  $json = json_validate($json);
  // output the json
  echo ($json);
  // clean up the mess
  $cmd = "rm /adp/3party/ffc/formSearch/$pageID.json";
  $output = shell_exec($cmd);
}

else if ($data->task == 'getsessiondata') {
  $debug = false ;
  $myArray = array();
  if(isset($_SESSION["currentuser"]))
  {
    // if you want to control access to the application, do it here with an database query
      // $sql = "SELECT * FROM $dbSchema.members where onlineID='" . $_SESSION["currentuser"] . "'";
      // $result = pg_query($conn, $sql);
      // if (!$result) {
      //   echo "Error: " . $sql . '<br>' ;
      // } else {
      //   while ($row = pg_fetch_assoc($result)) {
      //     $myArray[] = $row;
      //   }
      //   if (sizeof($myArray) > 0) {
      //     $myArray['id'] = 'new';
      //   }
      //   echo json_encode($myArray);
      // }
    // but i'm not at this time
    $row['id'] = 1;
    $myArray[] = $row;
    echo json_encode($myArray);
  } else {
    echo 'nosession';
  }    
}

function json_validate($string)
{
    // decode the JSON data
    $result = json_decode($string);

    // switch and check possible JSON errors
    switch (json_last_error()) {
        case JSON_ERROR_NONE:
            $error = ''; // JSON is valid // No error has occurred
            break;
        case JSON_ERROR_DEPTH:
            $error = 'The maximum stack depth has been exceeded.';
            break;
        case JSON_ERROR_STATE_MISMATCH:
            $error = 'Invalid or malformed JSON.';
            break;
        case JSON_ERROR_CTRL_CHAR:
            $error = 'Control character error, possibly incorrectly encoded.';
            break;
        case JSON_ERROR_SYNTAX:
            $error = 'Syntax error, malformed JSON.';
            break;
        // PHP >= 5.3.3
        case JSON_ERROR_UTF8:
            $error = 'Malformed UTF-8 characters, possibly incorrectly encoded.';
            break;
        // PHP >= 5.5.0
        case JSON_ERROR_RECURSION:
            $error = 'One or more recursive references in the value to be encoded.';
            break;
        // PHP >= 5.5.0
        case JSON_ERROR_INF_OR_NAN:
            $error = 'One or more NAN or INF values in the value to be encoded.';
            break;
        case JSON_ERROR_UNSUPPORTED_TYPE:
            $error = 'A value of a type that cannot be encoded was given.';
            break;
        default:
            $error = 'Unknown JSON error occured.';
            break;
    }

    if ($error !== '') {
      $result = "{\"matched\": false,\"error\":\"$error\"}";
    } else {
      $result = $string;
    }

    return $result;
}


?>