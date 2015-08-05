<?php
	$entityBody = file_get_contents('php://input');

	$jsonEntity = json_decode($entityBody);

	//var_dump($jsonEntity);

	$string = file_get_contents("../public_page/test.json");
	$json = json_decode($string, true);

	//var_dump($json);

	$entityName = $jsonEntity->name;

	for ($i=0; $i < count($json); $i++) {
		if ($entityName == $json[$i]['name']) {
			$json[$i] = $jsonEntity;
			break;
		}
	}

	$fp = fopen('../public_page/test.json', 'w');

	fwrite($fp, json_encode($json));
	fclose($fp);
?>