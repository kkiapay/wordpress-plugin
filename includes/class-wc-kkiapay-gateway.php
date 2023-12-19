<?php
// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

require_once(ABSPATH . 'wp-admin/includes/plugin.php');

class WC_Kkiapay_Gateway extends WC_Payment_Gateway
{
    /**
     * Protected constructor to prevent creating a new instance of the
     * *Singleton* via the `new` operator from outside of this class.
     */
    public function __construct()
    {

        $this->id = 'kkiapay_woocommerce_plugin';
        $this->icon = "https://firebasestorage.googleapis.com/v0/b/love-kkiapay.appspot.com/o/kkiapay-big-removebg-preview.png?alt=media&token=c8739252-66e7-41d6-9e49-392cad822020";
        $this->has_fields = false;
        $this->title = array_key_exists('title', $this->settings) ? $this->settings['title']: '';
        $this->method_title = 'Kkiapay';
        $this->method_description = array_key_exists('description', $this->settings) ? $this->settings['description']: '';

        $this->init_form_fields();

        $this->init_settings();

        $this->kkiapay_config = array();


        foreach ($this->settings as $setting_key => $value) {
            $this->$setting_key = $value;
            $this->kkiapay_config[$setting_key] = $value;
        }

        $this->testmode = 'yes' === $this->testmode;
        $this->kkiapay_config['key'] = $this->public_key;


        if ($this->description === "") {


            $this->description = "<div class='kkiapay-payment-method'>
              Moov Money, MTN Money, Orange Money, TMoney, FreeMoney, Wave, Visa, Mastercard
            </div>";
        }



        $this->import_kkiapay();
        add_action('admin_notices', array($this, 'do_ssl_check'));
        add_action('woocommerce_receipt_' . $this->id, array($this, 'receipt_page'));
        add_action('woocommerce_api_' . strtolower(get_class($this)), array($this, 'on_kkiapay_back'));

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



        wp_register_style('custom-kkiapay-style', plugins_url('../assets/css/style.css', __FILE__));
        wp_enqueue_style('custom-kkiapay-style');

        wp_enqueue_script('setup-kkiapay-script', "https://cdn.kkiapay.me/k.js", [], $plugin_information['Version'], true);
        wp_register_script('init-kkiapay-script', plugins_url('../assets/js/invoke.js', __FILE__), ['setup-kkiapay-script'], 'v1', true);

        if ($this->testmode == 'yes') {
            $sandbox = true;
        } else {
            $sandbox = false;
        }


        $this->kkiapay = new \Kkiapay\Kkiapay($this->public_key, $this->private_key, $this->secret, $sandbox);
    }

    public function import_admin_scripts()
    {
        wp_enqueue_script('jscolor', plugins_url('../assets/js/jscolor.js', __FILE__), [], 'v1', true);
        wp_enqueue_script('setup-admin-script', plugins_url('../assets/js/admin.js', __FILE__), [], 'v1', true);
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
    }

    public function process_payment($order_id)
    {
        $order = new WC_Order($order_id);

        $this->order_id = $order_id;

        $order->reduce_order_stock();
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
    public function receipt_page($order)
    {

        $this->kkiapay_config['callback'] = $this->get_callback_url($order);

        //TODO: add transaction reason

        $order = wc_get_order($order);
        echo '<p>' . __('Thank you for your order, please click the <b>Proceed to payment</b> button below to make payment.', 'kkiapay-woocommerce') . '</p>';
        echo '<a class="button cancel" href="' . esc_url($order->get_cancel_order_url()) . '">';
        echo __('Cancel order', 'kkiapay-woocommerce') . '</a> ';
        echo '<button class="button alt  wc-forward"  id="wc__kkiapay-button">' . __('Proceed to payment', 'kkiapay-woocommerce') . '</button> ';


        if (version_compare(WOOCOMMERCE_VERSION, '2.7.0', '>=')) {
            $this->kkiapay_config['amount'] = $order->get_total();
            $this->kkiapay_config['phone'] = $order->get_billing_phone();
            $this->kkiapay_config['email'] = $order->get_billing_email();
            $this->kkiapay_config['name'] = $order->get_formatted_billing_full_name();
        } else {

            $this->kkiapay_config['amount'] = $order->order_total;
            $this->kkiapay_config['phone'] = $order->billing_phone;
            $this->kkiapay_config['email'] = $order->billing_email;
            $this->kkiapay_config['name'] = $order->billing_first_name . ' ' . $order->billing_last_name;
        }

        $this->request_kkiapay_payment($this->kkiapay_config);
    }

    public function get_callback_url($order_id)
    {
        return home_url('/') . '?wc-api=' . get_class($this) . '&state=' . $order_id;
    }

    public function request_kkiapay_payment($data)
    {
        wp_enqueue_script('init-kkiapay-script');
        wp_localize_script('init-kkiapay-script', 'inputs', $data);
    }

    public function on_kkiapay_back()
    {
        global $woocommerce;
        $order_id = $_GET["state"];

        $order = wc_get_order($order_id);

        if (isset($_GET['transaction_id']) && isset($_GET['state'])) {
            $response = $this->kkiapay->verifyTransaction($_GET['transaction_id']);

            if ($response->status == \Kkiapay\STATUS::SUCCESS && $response->amount >= $order->get_total()) {

                $order->update_status('completed');
                $order->add_order_note(__('Payment was successful on Kkiapay', 'kkiapay-woocommerce'));
                $order->add_order_note('Kkiapay transaction Id: ' . $response->transactionId);
                $customer_note = __('Thank you for your order.<br>', 'kkiapay-woocommerce');
                $customer_note .= __('Your payment was successful, we are now <strong>processing</strong> your order.', 'kkiapay-woocommerce');
                $order->add_order_note($customer_note, 1);
                wc_add_notice($customer_note, 'notice');
                $woocommerce->cart->empty_cart();
                wp_redirect($this->get_return_url($order));
            } elseif ($response->status == \Kkiapay\STATUS::PENDING) {

                $order->update_status('on-hold');
                $customer_note = __('Thank you for your order.<br>', 'kkiapay-woocommerce');
                $customer_note .= __('Your payment has not been confirmed yet, so we have to put your order <strong>on-hold</strong> ', 'kkiapay-woocommerce');
                $customer_note .= __('If this persists, Please, contact us for information regarding this order.', 'kkiapay-woocommerce');

                $order->add_order_note($customer_note, 1);
                wc_add_notice($customer_note, 'notice');

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

                $woocommerce->cart->empty_cart();
                wp_redirect($this->get_return_url($order));
            } elseif ($response->status == \Kkiapay\STATUS::FAILED) {
                $this->handlePaymentFailed($order);
            } else {
                $this->handlePaymentFailed($order);
            }
        } else {
            $this->handlePaymentFailed($order);
        }
    }

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
}
