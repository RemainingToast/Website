<?php
    $stripe = new \Stripe\StripeClient("stripe api key");

    class Balance {

    }

    $balance = new Balance();

    $balance->balance = $stripe->balance->retrieve();

    $balance->month = date("F", strtotime('m');

    $json = json_encode($balance);

    file_put_contents('balance.json', $json);
?>