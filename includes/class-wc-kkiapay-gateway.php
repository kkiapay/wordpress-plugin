<?php
// Exit if accessed directly.

require_once  __DIR__ . '/class-kkiapay-gateway.php';

use KkiapayGateway\KkiapayGateway;
use KkiapayGateway\STATUS;

if (!defined('ABSPATH')) {
    exit;
}

require_once(ABSPATH . 'wp-admin/includes/plugin.php');


class WC_Kkiapay_Gateway extends WC_Payment_Gateway
{
    /**
     * Kkiapay config to open iframe
     *
     * @var array
     */
    private array $kkiapay_config;

    /**
     * API public key
     *
     * @var string
     */
    private $public_key;

    /**
     * API private key
     *
     * @var string
     */
    private $private_key;

    /**
     * API secret key
     *
     * @var string
     */
    private $secret;

    /**
     * Is test mode active?
     *
     * @var bool
     */
    private $testmode;

    /**
     * Gateway disabled message
     *
     * @var string
     */
    public $msg;

    // /**
    //  * Is refund active?
    //  *
    //  * @var bool
    //  */
    // public $refund;

    /**
     * Protected constructor to prevent creating a new instance of the
     * *Singleton* via the `new` operator from outside of this class.
     */
    public function __construct()
    {

        $this->id                 = 'kkiapay_woocommerce_plugin';
        $this->icon               = 'https://github.com/kkiapay/wordpress-plugin/assets/91498943/69fd580e-b43f-4a39-abc9-cba86ebfb74d';
        $this->has_fields         = true;
        // $this->refund             = $this->get_option('refund');
        $this->title              = array_key_exists('title', $this->settings) ? $this->settings['title'] : '';
        $this->method_title       = 'Kkiapay';
        $this->description = "<div class='kkiapay-payment-method'>
              Moov Money, MTN Money, Orange Money, TMoney, FreeMoney, Wave, Visa, Mastercard
            </div>";
        $this->method_description = array_key_exists('description', $this->settings) ? $this->settings['description'] : '';
        $this->public_key         = $this->get_option('public_key');
        $this->private_key        = $this->get_option('private_key');
        $this->secret             = $this->get_option('secret');
        $this->supports           = array(
            'products',
        );

        // if ($this->refund === "yes") $this->supports[] = "refunds";

        $this->init_form_fields();

        $this->init_settings();

        $this->testmode                        = $this->settings['testmode'] === 'yes' ? true : false;
        $this->kkiapay_config['key']           = $this->public_key;
        $this->kkiapay_config['paymentmethod'] = $this->settings['paymentmethod'];
        $this->kkiapay_config['theme']         = $this->settings['theme'];
        $this->kkiapay_config['position']      = $this->settings['position'];
        $this->kkiapay_config['sandbox']       = $this->testmode;


        // if ($this->description === "") {
        $this->description = "<div class='kkiapay-payment-method'>
              Moov Money, MTN Money, Orange Money, TMoney, FreeMoney, Wave, Visa, Mastercard
            </div>";
        // }



        $this->import_kkiapay();
        add_action('admin_notices', array($this, 'do_ssl_check'));
        add_action('woocommerce_receipt_' . $this->id, array($this, 'receipt_page'));

        // Payment listener/API hook.
        add_action('woocommerce_api_wc_kkiapay_gateway', array($this, 'on_kkiapay_back'));

        // Webhook listener/API hook.
        add_action('woocommerce_api_wc_kkiapay_gateway_webhook', array($this, 'on_kkiapay_webhook'));

        if (is_admin()) {
            add_action('woocommerce_update_options_payment_gateways_' . $this->id, array($this, 'process_admin_options'));
            $this->import_admin_scripts();
        }


        if (!$this->is_valid_for_use()) {
            $this->enabled = false;
        }
    }





    /**
     * Initialise Gateway Settings Form Fields.
     */
    public function init_form_fields()
    {
        $this->form_fields = include plugin_dir_path(__DIR__) . '/admin/kkiapay-settings.php';
    }

    public function import_kkiapay()
    {
        $filename = 'kkiapay-woocommerce-plugin.php';
        $path = plugin_dir_path(__DIR__) . $filename;
        $plugin_information = get_plugin_data($path);



        wp_register_style('custom-kkiapay-style', plugins_url('../assets/css/style.css', __FILE__), [], $plugin_information['Version']);
        wp_enqueue_style('custom-kkiapay-style');

        wp_enqueue_script('setup-kkiapay-script', "https://cdn.kkiapay.me/k.js", [], $plugin_information['Version'], true);
        wp_register_script('init-kkiapay-script', plugins_url('../assets/js/invoke.js', __FILE__), ['setup-kkiapay-script'], $plugin_information['Version'], true);
    }

    public function import_admin_scripts()
    {
        $filename = 'kkiapay-woocommerce-plugin.php';
        $path = plugin_dir_path(__DIR__) . $filename;
        $plugin_information = get_plugin_data($path);

        wp_enqueue_script('jscolor', plugins_url('../assets/js/jscolor.js', __FILE__), [], $plugin_information['Version'], true);
        wp_enqueue_script('setup-admin-script', plugins_url('../assets/js/admin.js', __FILE__), [], $plugin_information['Version'], true);
    }

    /**
     * Check if this gateway is enabled and can work with user currency.
     */
    public function is_valid_for_use()
    {

        //verify currency
        $currency = get_woocommerce_currency();

        $allowed_currency = array('XOF');

        if (!in_array($currency, $allowed_currency)) {
            $this->msg = __('Kkiapay does not support your store currency. Kindly set it to XOF (FCFA)', 'kkiapay-woocommerce') . '<a href="' . admin_url('admin.php?page=wc-settings&tab=general') . '">here</a>';

            return false;
        }
        return true;
    }


    public function admin_options()
    {
        if (!$this->is_valid_for_use()) {
            echo '<div class="inline error"><p><strong>' . __('Kkiapay Payment Gateway Disabled', 'kkiapay-woocommerce') . '</strong>: ' . $this->msg . '</p></div>';
        } else {
            echo '<table class="form-table">';
            $this->generate_settings_html();
            echo '</table>';
        }
?>
        <h4>
            <strong><?php printf(__('Facultatif : Pour éviter les situations où un mauvais réseau rend impossible la vérification des transactions, définissez l\'URL de votre webhook <a href="%1$s" target="_blank" rel="noopener noreferrer">ici</a> sur l\'URL ci-dessous. <span><pre><code>%2$s</code></pre></span>', 'kkiapay-woocommerce'), 'https://app.kkiapay.me/dashboard/developers/keys', WC()->api_request_url('Wc_Kkiapay_Gateway_Webhook')); ?></strong>
        </h4>
<?php
    }

    public function process_payment($order_id)
    {
        $order = new WC_Order($order_id);

        return array(
            'result' => 'success',
            'redirect' => $order->get_checkout_payment_url(true)
        );
    }

    /**
     * Checkout receipt page
     *
     * @return void
     */
    public function receipt_page($order_id)
    {
        $this->kkiapay_config['callback'] = $this->get_callback_url($order_id);

        //TODO: add transaction reason

        $order = wc_get_order($order_id);
        $order_key = urldecode($_GET['key']);

        if ($this->id !== $order->get_payment_method()) {
            return;
        }

        echo '<p>' . __('Thank you for your order, please click the <b>Proceed to payment</b> button below to make payment.', 'kkiapay-woocommerce') . '</p>';
        echo '<a class="button cancel" href="' . esc_url($order->get_cancel_order_url()) . '">';
        echo __('Cancel order', 'kkiapay-woocommerce') . '</a> ';
        echo '<button class="button alt  wc-forward"  id="wc__kkiapay-button">' . __('Proceed to payment', 'kkiapay-woocommerce') . '</button> ';


        $this->setKkiapayConfig($order);


        $this->request_kkiapay_payment($this->kkiapay_config);
    }

    /**
     * Set kkiapay_config based on order
     *
     * @return void
     */
    private function setKkiapayConfig(WC_Order $order)
    {
        if (version_compare(WOOCOMMERCE_VERSION, '2.7.0', '>=')) {
            $this->kkiapay_config['amount'] = $order->get_total();
            $this->kkiapay_config['phone'] = $order->get_billing_phone();
            $this->kkiapay_config['email'] = $order->get_billing_email();
            $this->kkiapay_config['name'] = $order->get_formatted_billing_full_name();


            $line_items = $order->get_items();

            $products = '';

            foreach ($line_items as $item_id => $item) {

                $id        = $item["product_id"];
                $name      = $item['name'];
                $quantity  = $item['qty'];
                $products .= $name . ' [product_id: ' . $id . '] ' . ' (Qty: ' . $quantity . ')';
                $products .= ' | ';
            }

            $products = rtrim($products, ' | ');

            $this->kkiapay_config['data'] = [
                "sdk" => "woocommerce",
                "woocommerce_version" => WOOCOMMERCE_VERSION,
                "order_id" => $order->get_id(),
                "orderer_name" => $order->get_formatted_billing_full_name(),
                "orderer_email" => $order->get_billing_email(),
                "orderer_phone" => $order->get_billing_phone(),
                "products" => $products
            ];
        } else {
            $this->kkiapay_config['amount'] = $order->order_total;
            $this->kkiapay_config['phone'] = $order->billing_phone;
            $this->kkiapay_config['email'] = $order->billing_email;
            $this->kkiapay_config['name'] = $order->billing_first_name . ' ' . $order->billing_last_name;
        }
    }

    public function get_callback_url($order_id)
    {
        return home_url('/') . '?wc-api=' . get_class($this) . '&order_id=' . $order_id;
    }

    public function request_kkiapay_payment($data)
    {
        wp_enqueue_script('init-kkiapay-script');
        wp_localize_script('init-kkiapay-script', 'inputs', $data);
    }

    public function on_kkiapay_back()
    {
        global $woocommerce;
        $order_id = $_GET["order_id"];
        $transaction_id = $_GET["transaction_id"];

        $kkiapay = new KkiapayGateway($this->public_key, $this->private_key, $this->secret, $this->testmode);

        if (isset($transaction_id)) {
            $response = $kkiapay->verifyTransaction($transaction_id);
            $order_id = $response->state->order_id;

            $order = wc_get_order($order_id);

            if ($response->status == STATUS::SUCCESS && $response->amount >= $order->get_total()) {

                $order->update_status('completed');
                $order->add_order_note(__('Payment was successful on Kkiapay', 'kkiapay-woocommerce'));
                $order->add_order_note('Kkiapay transaction Id: ' . $response->transactionId);
                $order->add_meta_data('_transaction_id', $response->transactionId, true);

                $customer_note = __('Thank you for your order.<br>', 'kkiapay-woocommerce');
                $customer_note .= __('Your payment was successful, we are now <strong>processing</strong> your order.', 'kkiapay-woocommerce');
                $order->add_order_note($customer_note, 1);
                function_exists('wc_reduce_stock_levels') ? wc_reduce_stock_levels($order_id) : $order->reduce_order_stock();

                wc_add_notice($customer_note, 'notice');
                $order->save();

                $woocommerce->cart->empty_cart();
                wp_redirect($this->get_return_url($order));
            } elseif ($response->status == STATUS::PENDING) {

                $order->update_status('on-hold');
                $customer_note = __('Thank you for your order.<br>', 'kkiapay-woocommerce');
                $customer_note .= __('Your payment has not been confirmed yet, so we have to put your order <strong>on-hold</strong> ', 'kkiapay-woocommerce');
                $customer_note .= __('If this persists, Please, contact us for information regarding this order.', 'kkiapay-woocommerce');

                $order->add_order_note($customer_note, 1);
                wc_add_notice($customer_note, 'notice');

                function_exists('wc_reduce_stock_levels') ? wc_reduce_stock_levels($order_id) : $order->reduce_order_stock();
                $order->save();

                $woocommerce->cart->empty_cart();
                wp_redirect($this->get_return_url($order));
            } elseif ($response->amount < $order->get_total()) {
                $order->update_status('on-hold');
                $customer_note = __('Thank you for your order.<br>', 'kkiapay-woocommerce');
                $customer_note .= __('Your payment has not been confirmed yet, so we have to put your order <strong>on-hold</strong> ', 'kkiapay-woocommerce');
                $customer_note .= __('If this persists, Please, contact us for information regarding this order.', 'kkiapay-woocommerce');
                $admin_note = __('Attention: New order has been placed on hold because of incorrect payment amount or currency. Please, look into it. <br>', 'kkiapay-woocommerce');
                $admin_note .= __('Amount paid: ' . $order->get_currency() . ' ' . $response->amount . ' <br> Order amount: ' . $order->get_order_currency() . ' ' . $order->order_total . ' <br> Reference: ' . $response->transactionId, 'kkiapay-woocommerce');

                $order->add_order_note($customer_note, 1);
                $order->add_order_note($admin_note);
                wc_add_notice($customer_note, 'notice');

                function_exists('wc_reduce_stock_levels') ? wc_reduce_stock_levels($order_id) : $order->reduce_order_stock();
                $order->save();

                $woocommerce->cart->empty_cart();
                wp_redirect($this->get_return_url($order));
            } elseif ($response->status == STATUS::FAILED) {
                $this->handlePaymentFailed($order);
            } else {
                $this->handlePaymentFailed($order);
            }
        } else {
            $this->handlePaymentFailed($order);
        }
    }

    /**
     * Process Webhook.
     */
    function on_kkiapay_webhook()
    {

        if (!array_key_exists('HTTP_X_KKIAPAY_SECRET', $_SERVER) || (strtoupper($_SERVER['REQUEST_METHOD']) !== 'POST')) {
            exit;
        }
        $json = file_get_contents('php://input');
        $payload = json_decode($json);


        if (!$payload->stateData || !$payload->stateData->order_id || $payload->stateData->sdk !== "woocommerce") {
            return;
        }
        $order_id = $payload->stateData->order_id;
        $order = wc_get_order($order_id);
        if (!$order) {
            return;
        }

        $kkiapay = new KkiapayGateway($this->public_key, $this->private_key, $this->secret, $this->testmode);
        $response = $kkiapay->verifyTransaction($payload->transactionId);
        $status = $response->status;


        if ($status == STATUS::SUCCESS && $response->amount >= $order->get_total()) {
            $order->update_status('completed');
            $order->add_order_note(__('Payment was successful on Kkiapay', 'kkiapay-woocommerce'));
            $order->add_order_note('Kkiapay transaction Id: ' . $payload->transactionId);
            $order->add_meta_data('_transaction_id', $payload->transactionId, true);

            $customer_note = __('Thank you for your order.<br>', 'kkiapay-woocommerce');
            $customer_note .= __('Your payment was successful, we are now <strong>processing</strong> your order.', 'kkiapay-woocommerce');
            $order->add_order_note($customer_note, 1);
            function_exists('wc_reduce_stock_levels') ? wc_reduce_stock_levels($order_id) : $order->reduce_order_stock();

            wc_add_notice($customer_note, 'notice');
            $order->save();

            WC()->cart->empty_cart();
        } elseif ($status == STATUS::FAILED) {
            $this->handlePaymentFailed($order);
        }
        exit;
    }

    /**
     * Handle Payment Failed.
     *
     * @param WC_Order $order
     */
    public function handlePaymentFailed($order)
    {
        $order->add_order_note(__('The order payment failed on Kkiapay', 'kkiapay-woocommerce'));
        $customer_note = __('Your payment <strong>failed</strong>. ', 'kkiapay-woocommerce');
        $customer_note .= __('Please, try funding your account.', 'kkiapay-woocommerce');
        $order->add_order_note($customer_note, 1);
        wc_add_notice($customer_note, 'notice');

        $url = wc_get_checkout_url();
        wp_redirect($url);
    }

    // Check if we are forcing SSL on checkout pages
    public function do_ssl_check()
    {
        if ($this->enabled == "yes") {
            if (get_option('woocommerce_force_ssl_checkout') == "no") {
                echo "<div class=\"error\"><p>" . sprintf(__("<strong>%s</strong> is enabled and WooCommerce is not forcing the SSL certificate on your checkout page. Please ensure that you have a valid SSL certificate and that you are <a href=\"%s\">forcing the checkout pages to be secured.</a>", 'kkiapay-woocommerce'), $this->method_title, admin_url('admin.php?page=wc-settings&tab=checkout')) . "</p></div>";
            }
        }
    }

    /**
     * Process a refund request from the Order details screen.
     *
     * @param int $order_id WC Order ID.
     * @param float|null $amount Refund Amount.
     * @param string $reason Refund Reason
     *
     * @return bool|WP_Error
     */
    public function process_refund($order_id, $amount = null, $reason = '')
    {
        $kkiapay = new KkiapayGateway($this->public_key, $this->private_key, $this->secret, $this->testmode);
        if (!($this->public_key && $this->secret)) {
            return false;
        }

        $order = wc_get_order($order_id);

        if (!$order) {
            return false;
        }

        $transaction_id = $order->get_transaction_id();
        $refund_response = $kkiapay->refundTransaction($transaction_id);
        if ($refund_response->code === STATUS::SUCCESS) {
            $refund_message = sprintf(__('Refunded %1$s. Transaction ID: %2$s. Reason: %3$s', 'kkiapay-woocommerce'), $amount, $transaction_id, $reason);
            $order->add_order_note($refund_message);

            return true;
        }
        return new WP_Error('error');
    }
}
