<?php

namespace KkiapayGateway;

final class Constants
{
    const BASE_URL = "https://api.kkiapay.me";
    const SANDBOX_URL = "https://api-sandbox.kkiapay.me";
};

final class STATUS
{
    const SUCCESS = "SUCCESS";
    const INVALID_TRANSACTION = "INVALID_TRANSACTION";
    const INVALID_TRANSACTION_TYPE = "INVALID_TRANSACTION_TYPE";
    const TRANSACTION_NOT_FOUND = "TRANSACTION_NOT_FOUND";
    const TRANSACTION_NOT_ELIGIBLE = "TRANSACTION_NOT_ELIGIBLE";
    const INSUFFICIENT_FUND = "INSUFFICIENT_FUND";
    const PENDING = "PENDING";
    const FAILED = "FAILED";
    const REVERTED = "REVERTED";
};



class KkiapayGateway
{

    // Publishable Api key
    private $public_key;

    // Account Private Key
    private $private_key;

    // Account Secret
    private $secret;

    private $sandbox;

    /**
     * Kkiapay constructor.
     */
    public function __construct($public_key, $private_key, $secret = null, $sandbox = false)
    {
        $this->private_key = $private_key;
        $this->public_key = $public_key;
        $this->secret = $secret;
        $this->sandbox = $sandbox;
    }
    public function verifyTransaction($transactionId)
    {
        $response = null;

        $const = $this->sandbox ? Constants::SANDBOX_URL : Constants::BASE_URL;

        $response = wp_remote_post($const . '/api/v1/transactions/status', array(
            "body" => array("transactionId" => $transactionId),
            'headers' => [
                'Accept' => 'application/json',
                'X-API-KEY' => $this->public_key,
                'X-PRIVATE-KEY' => $this->private_key,
                'X-SECRET-KEY' => $this->secret
            ]
        ));
        if (
            !is_wp_error($response) && 200 === wp_remote_retrieve_response_code($response)
        ) {
            $reponse_body = wp_remote_retrieve_body($response);
            return json_decode((string)$reponse_body);
        }
        $reponse_body = json_encode(array("status" => STATUS::TRANSACTION_NOT_FOUND));

        return json_decode((string)$reponse_body);
    }

    public function refundTransaction($transactionId)
    {
        $response = null;

        $const = $this->sandbox ? Constants::SANDBOX_URL : Constants::BASE_URL;
        $response = wp_remote_post($const . '/api/v1/transactions/revert', array(
            "body" => array("transactionId" => $transactionId),
            'headers' => [
                'Accept'     => 'application/json',
                'X-API-KEY'      => $this->public_key
            ]
        ));
        if (
            !is_wp_error($response) && 200 === wp_remote_retrieve_response_code($response)
        ) {
            $reponse_body = wp_remote_retrieve_body($response);
            return json_decode((string)$reponse_body);
        }

        $reponse_body = json_decode(wp_remote_retrieve_body($response));

        if (isset($reponse_body->message)) {
            return new WP_Error('error', $reponse_body->message);
        } else {
            return new WP_Error('error', __('Can&#39;t process refund at the moment. Try again later.', 'kkiapay-woocommerce'));
        }
    }
}
