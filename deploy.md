Need to update version before update on Store. 

  Files to update :   

  - kkiapay-woocommerce-plugin.php
    * line 10:  **Version: 2.4.x**
  - kkiapay-woocommerce-plugin.php
    * line 20:  **define('WC_KKIAPAY_VERSION', '2.4.x');**
  - readme.txt
    * line 7: **Stable tag: 2.4.x**
        

export SVN_PASSWORD='' && export SVN_USERNAME='' && deploy/deploy.sh