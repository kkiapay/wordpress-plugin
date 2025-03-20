<?php

/**
 * Settings for Kkiapay Plugin.
 *
 */
defined('ABSPATH') || exit;

return array(
    'enabled' => array(
        'title' => __('Enable/Disable', 'kkiapay-woocommerce'),
        'label' => __('Enable Kkiapay Gateway', 'kkiapay-woocommerce'),
        'type' => 'checkbox',
        'description' => '',
        'default' => 'yes'
    ),

    'testmode' => array(
        'title' => __('Test Mode', 'kkiapay-woocommerce'),
        'label' => __('Enable Test Mode', 'kkiapay-woocommerce'),
        'type' => 'checkbox',
        'description' => __('Sets Kkiapay into test mode', 'kkiapay-woocommerce'),
        'default' => 'no',
        'desc_tip'    => true,
    ),
    'title' => array(
        'title'       => __( '(Optional) Title', 'kkiapay-woocommerce' ),
        'type'        => 'text',
        'description' => __( 'This controls the title which the user sees during checkout.', 'kkiapay-woocommerce' ),
        'default'     => __( 'Pay by Mobile Money and Credit Card (Kkiapay)', 'kkiapay-woocommerce' ),
        'desc_tip'    => true,
    ),
    'description' => array(
        'title'       => __( '(Optional) Description', 'kkiapay-woocommerce' ),
        'type'        => 'text',
        'description' => __( 'This controls the description which the user sees during checkout.', 'kkiapay-woocommerce' ),
        'default'     => __( 'Use kkiapay to pay with your Mobile Money account, credit card or bank account', 'kkiapay-woocommerce' ),
        'desc_tip'    => true,
    ),
    'public_key' => array(
        'title' => __('Public KEY', 'kkiapay-woocommerce'),
        'type' => 'password',
        'desc_tip'    => true,
        'description' => __('Get your API keys from your Kkkiapay dashboard', 'kkiapay-woocommerce')
    ),
    'private_key' => array(
        'title' => __('Private KEY', 'kkiapay-woocommerce'),
        'type' => 'password',
        'desc_tip'    => true,
        'description' => __('Get your API keys from your Kkkiapay dashboard', 'kkiapay-woocommerce')
    ),
    'secret' => array(
        'title' => __('Secret', 'kkiapay-woocommerce'),
        'type' => 'password',
        'desc_tip'    => true,
        'description' => __('Get your API keys from your Kkkiapay dashboard', 'kkiapay-woocommerce')
    ),
    'paymentmethod' => array(
        'title' => __('(Optional) Payment methods', 'kkiapay-woocommerce'),
        'description' => __('Set the payment methods you choose to support.', 'kkiapay-woocommerce'),
        'type' => 'select',
        'default' => 'all',
        'desc_tip'    => true,
        'options' => array(
            'all' => (__('All', 'kkiapay-woocommerce')),
            'momo' => (__('Mobile Money', 'kkiapay-woocommerce')),
            'card' => (__('Bank Cards', 'kkiapay-woocommerce'))
        )
    ),
    'position' => array(
        'title' => __('(Optional) Widget Position', 'kkiapay-woocommerce'),
        'type' => 'select',
        'description' => __('When Kkiapay payment form is displayed directly on your site, you can choose the widget displaying position (left side, right side or center). ', 'kkiapay-woocommerce'),
        'default' => 'center',
        'desc_tip'    => true,
        'options' => array(
            'right' => (__('Right Side', 'kkiapay-woocommerce')),
            'left' => (__('Left Side', 'kkiapay-woocommerce')),
            'center' => (__('Center', 'kkiapay-woocommerce'))
        )
    ),
    'theme' => array(
        'title' => __('(Optional) Widget Theme', 'kkiapay-woocommerce'),
        'type' => 'text',
        'desc_tip'    => true,
        'description' => __('When Kkiapay payment form is displayed directly on your site, you can choose the widget color (eg: red) according to your website colors. ', 'kkiapay-woocommerce')
    ),
    // 'refund' => array(
    //     'title' => __('Refund', 'kkiapay-woocommerce'),
    //     'label' => __('Enable/Disable refund', 'kkiapay-woocommerce'),
    //     'default' => 'false',
    //     'type' => 'checkbox',
    //     'desc_tip'    => true,
    //     'description' => __('Kkiapay does not support multiple refunds. This means that a refund for one order will refund the full amount to the customer.', 'kkiapay-woocommerce')
    // )

);
