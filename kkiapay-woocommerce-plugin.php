<?php
/**
 * Plugin Name: KKiapay WooCommerce Plugin
 * Plugin URI: https://wordpress.org/plugins/kkiapay-woocommerce-plugin
 * Description: KkiaPay allows businesses to safely receive payments by mobile money, credit card and bank account.
 * Author: Kkipay Developer Team ❤️
 * Author URI: https://kkiapay.me/
 * License: GPLv2
 * Version: 1.0.6
 * Requires at least: 4.4
 * Tested up to: 5.0
 * WC requires at least: 2.6
 * WC tested up to: 3.5
 * Text Domain: kkiapay-woocommerce
 * Domain Path: /languages
*/

// Make sure WooCommerce is active
 if ( ! in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) return;


/*
 * The class itself, please note that it is inside plugins_loaded action hook
 */
function kkiapay_init_gateway_class() {
	if ( ! class_exists( 'WC_Payment_Gateway' ) ) return;
    require_once(plugin_dir_path(__FILE__) . 'includes/class-wc-kkiapay-gateway.php');
    
    add_filter( 'woocommerce_payment_gateways', 'kkiapay_add_gateway_class' );

    /*
    * This action hook registers our PHP class as a WooCommerce payment gateway
    */
        function kkiapay_add_gateway_class( $gateways ) {
	        $gateways[] = 'WC_Kkiapay_Gateway';
	    return $gateways;
        } 

}

add_action( 'plugins_loaded', 'kkiapay_init_gateway_class' );

/**
 * Adds plugin action links.
 */
function kkiapay_action_links( $links ) {

	$links[] = 	'<a href="admin.php?page=wc-settings&tab=checkout&section=kkiapay_woocommerce_plugin">Settings</a>';
	$links[] = '<a href="https://docs.kkiapay.me/v1/plugin-et-sdk/woo-commerce" target="_blank">Docs</a>';
	$links[] = '<a href="http://support.kkiapay.me" target="_blank">Support</a>';

	return $links;
}

add_action( 'plugin_action_links_' . plugin_basename( __FILE__ ), 'kkiapay_action_links' );

/**
 * Load tanslation files
 */
function kkiapay_load_plugin_textdomain() {
    load_plugin_textdomain( 'kkiapay-woocommerce', FALSE, basename( dirname( __FILE__ ) ) . '/languages/' );
}

add_action( 'plugins_loaded', 'kkiapay_load_plugin_textdomain' );

