<?php

$debug = true ;

if ($debug){
  $fp = fopen('/adp/3party/ffc/adynak/zap/test.txt','a+');
}

session_start();
$data = json_decode(file_get_contents("php://input"));

$data = new stdClass();
$data->task = 'search';
$data->pageID = 'search';
$data->searchPattern = 'search';

if ($data->task == 'search') {
  // looks like this:
  // {
  //   "matched": true,
  //   "matchingForms": [{
  //       "account": "90-FI",
  //       "formID": "FORM*3439",
  //       "formName": "ALABAMA POA SOLD",
  //       "date": "03/18/2015",
  //       "description": "MVT 5-13 1/13  (SOLD)(PDF FILE)",
  //       "comment": "(EXPO) KN (CH) CHECK DEALER SETUPS USED A3= SOLD VEH (B/C/BC/CB/O)"
  //   }]
  // }
  $pageID = $data->pageID;
  $searchPattern = $data->searchPattern;
  $cmd  = 'cd /adp/tmp;';
  $cmd .= 'ksh ffcSearchForms.ksh ';
  $cmd .= $pageID . ' ';
  $cmd .= $searchPattern;
  // $output = shell_exec($cmd);
  $pageID = 'search';

  $json = file_get_contents("/adp/3party/ffc/formSearch/$pageID.json");
  // remove non-printing characters
  $json = preg_replace('/[\x00-\x1F\x7F-\xFF]/', '', $json);
  // is the json valid?
  $json = json_validate($json);
  // output the json
  echo ($json);
  // clean up the mess
  $cmd = "rm /adp/3party/ffc/formSearch/$pageID.json";
  // $output = shell_exec($cmd);
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