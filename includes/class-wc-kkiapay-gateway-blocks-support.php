<?php

use Automattic\WooCommerce\Blocks\Payments\Integrations\AbstractPaymentMethodType;
use Automattic\WooCommerce\StoreApi\Payments\PaymentContext;
use Automattic\WooCommerce\StoreApi\Payments\PaymentResult;

final class WC_KKiapay_Gateway_Blocks_Support extends AbstractPaymentMethodType
{

    /**
     * Payment method name/id/slug.
     *
     * @var string
     */
    protected $name = 'kkiapay_woocommerce_plugin';

    /**
     * Initializes the payment method type.
     */
    public function initialize()
    {
        // get payment gateway settings
        $this->settings = get_option("woocommerce_{$this->name}_settings", array());
        add_action('woocommerce_rest_checkout_process_payment_with_context', array($this, 'failed_payment_notice'), 8, 2);
    }

    /**
     * Returns if this payment method should be active. If false, the scripts will not be enqueued.
     *
     * @return boolean
     */
    public function is_active()
    {
        return !empty($this->settings['enabled']) && 'yes' === $this->settings['enabled'];

        // $payment_gateways_class = WC()->payment_gateways();
        // $payment_gateways       = $payment_gateways_class->payment_gateways();
        // return $payment_gateways['kkiapay_woocommerce_plugin']->is_available();
    }

    /**
     * Returns an array of scripts/handles to be registered for this payment method.
     *
     * @return array
     */
    public function get_payment_method_script_handles()
    {
        $script_asset_path = plugins_url('build/index.asset.php', WC_KKIAPAY_MAIN_FILE);
        $script_asset      = file_exists($script_asset_path)
            ? require $script_asset_path
            : array(
                'dependencies' => array(),
                'version'      => WC_KKIAPAY_VERSION,
            );

        $script_url = plugins_url('build/index.js', WC_KKIAPAY_MAIN_FILE);
        wp_register_script(
            'wc-kkiapay_woocommerce_plugin-blocks-integration',
            $script_url,
            $script_asset['dependencies'],
            $script_asset['version'],
            true
        );

        // if (function_exists('wp_set_script_translations')) {
        //     wp_set_script_translations('wc-kkiapay-blocks', 'woo-paystack',);
        // }

        return array('wc-kkiapay_woocommerce_plugin-blocks-integration');
    }

    /**
     * Returns an array of key=>value pairs of data made available to the payment methods script.
     *
     * @return array
     */
    public function get_payment_method_data()
    {
        $payment_gateways_class = WC()->payment_gateways();
        $payment_gateways       = $payment_gateways_class->payment_gateways();
        $gateway                = $payment_gateways['kkiapay_woocommerce_plugin'];

        return array(
            'title'             => $this->get_setting('title'),
            'description'       => $this->get_setting('description'),
            'icon'              => plugins_url('assets/img/kkiapay.svg', WC_KKIAPAY_MAIN_FILE) . '?ver=' . WC_KKIAPAY_VERSION,
            'supports'          => array_filter($gateway->supports, array($gateway, 'supports')),
        );
    }

    /**
     * Add failed payment notice to the payment details.
     *
     * @param PaymentContext $context Holds context for the payment.
     * @param PaymentResult  $result  Result object for the payment.
     */
    public function failed_payment_notice(PaymentContext $context, PaymentResult &$result)
    {
        if ('kkiapay_woocommerce_plugin' === $context->payment_method) {
            add_action(
                'wc_gateway_kkiapay_woocommerce_plugin_process_payment_error',
                function ($failed_notice) use (&$result) {
                    $payment_details                 = $result->payment_details;
                    $payment_details['errorMessage'] = wp_strip_all_tags($failed_notice);
                    $result->set_payment_details($payment_details);
                }
            );
        }
    }
}
