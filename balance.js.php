function update() {

    atob("<?php
        $stripe = new \Stripe\StripeClient("");

        class Balance {

        }

        $balance = new Balance();

        $balance->balance = $stripe->balance->retrieve();;

        $json = json_encode($balance);

        file_put_contents('balance.json', $json);
    ?>")

}

