<?php

$debug = false ;

if ($debug){
  $fp = fopen('test.txt','a+');
}

session_start();
$data = json_decode(file_get_contents("php://input"));

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
  $pageID = $_GET['pageID'];
  $searchPattern = $_GET['searchPattern'];
  $cmd  = 'cd /adp/tmp;';
  $cmd .= 'ksh ffcSearchForms.ksh ';
  $cmd .= $pageID . ' ';
  $cmd .= $searchPattern;
  $output = shell_exec($cmd);

  $file = file_get_contents('/adp/3party/ffc/formSearch/$pageID.json');
  echo ($file);
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

?>