<?php

/**
 * Plugin Name: KKiapay WooCommerce Plugin
 * Plugin URI: https://wordpress.org/plugins/kkiapay-woocommerce-plugin
 * Description: KkiaPay allows businesses to safely receive payments by mobile money, credit card and bank account.
 * Author: Kkiapay Developer Team ❤️
 * Author URI: https://kkiapay.me/
 * License: GPLv2
 * Version: 2.4.7
 * Requires at least: 6.0
 * Tested up to: 6.4.3
 * WC requires at least: 6.0
 * WC tested up to: 6.4.3
 * Text Domain: kkiapay-woocommerce
 * Domain Path: /languages
 */

define('WC_KKIAPAY_MAIN_FILE', __FILE__);
define('WC_KKIAPAY_VERSION', '2.4.7');

// Make sure WooCommerce is active
if (!in_array('woocommerce/woocommerce.php', apply_filters('active_plugins', get_option('active_plugins'))))
    return;

/*
 * The class itself, please note that it is inside plugins_loaded action hook
 */
function kkiapay_init_gateway_class()
{
    if (!class_exists('WC_Payment_Gateway'))
        return;
    require_once(plugin_dir_path(__FILE__) . 'includes/class-wc-kkiapay-gateway.php');

    add_filter('woocommerce_payment_gateways', 'kkiapay_add_gateway_class');

    /*
     * This action hook registers our PHP class as a WooCommerce payment gateway
     */
    function kkiapay_add_gateway_class($gateways)
    {
        $gateways[] = 'WC_Kkiapay_Gateway';
        return $gateways;
    }
}
add_action('plugins_loaded', 'kkiapay_init_gateway_class');


/**
 * Adds plugin action links.
 */
function kkiapay_action_links($links)
{
    $links[] = '<a href="admin.php?page=wc-settings&tab=checkout&section=kkiapay_woocommerce_plugin">' . __('Settings', 'kkiapay-woocommerce') . '</a>';
    $links[] = '<a href="https://docs.kkiapay.me/v1/plugin-et-sdk/woo-commerce" target="_blank">' . __('Docs', 'kkiapay-woocommerce') . '</a>';
    $links[] = '<a href="http://support.kkiapay.me" target="_blank">' . __('Support', 'kkiapay-woocommerce') . '</a>';

    return $links;
}
add_action('plugin_action_links_' . plugin_basename(__FILE__), 'kkiapay_action_links');


/**
 * Load tanslation files
 */
function kkiapay_load_plugin_textdomain()
{
    load_plugin_textdomain('kkiapay-woocommerce', FALSE, basename(dirname(__FILE__)) . '/languages/');
}

add_action('plugins_loaded', 'kkiapay_load_plugin_textdomain');

/**
 * Declare the HPOS compatibility
 */
add_action(
    'before_woocommerce_init',
    function () {
        if (class_exists(\Automattic\WooCommerce\Utilities\FeaturesUtil::class)) {
            \Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility('custom_order_tables', __FILE__, true);
        }
        if (class_exists('\Automattic\WooCommerce\Utilities\FeaturesUtil')) {
            \Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility(
                'cart_checkout_blocks',
                __FILE__,
                true
            );
        }
    }
);

/**
 * Registers WooCommerce Blocks integration.
 */
function kkiapay_gateway_woocommerce_block_support()
{

    if (class_exists(\Automattic\WooCommerce\Blocks\Payments\Integrations\AbstractPaymentMethodType::class)) {

        require_once __DIR__ . '/includes/class-wc-kkiapay-gateway-blocks-support.php';

        add_action(
            'woocommerce_blocks_payment_method_type_registration',
            static function (Automattic\WooCommerce\Blocks\Payments\PaymentMethodRegistry $payment_method_registry) {
                $payment_method_registry->register(new WC_KKiapay_Gateway_Blocks_Support());
            }
        );
    }
}
add_action('woocommerce_blocks_loaded', 'kkiapay_gateway_woocommerce_block_support');
