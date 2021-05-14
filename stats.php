<?php

header('Content-Type: application/json');

echo file_get_contents("https://api.2b2t.com.au/v1/stats");
