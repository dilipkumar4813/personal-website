<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'iamdilipkumar' );

/** Database username */
define( 'DB_USER', 'dilanya' );

/** Database password */
define( 'DB_PASSWORD', 'Mahindra!@#1.' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '0<w=ApyW{N&vOk MW3]G5Z00^T|q^B:=nL!^i!g798bao?[RIl=GVViC=#`7elj9' );
define( 'SECURE_AUTH_KEY',  'QWyXpn&4]gEH#,&cW}s A,S ~$BXdL)js};A~(A%{; pC;5pC9X#Nh:ra)&`xI*L' );
define( 'LOGGED_IN_KEY',    'VIp/x/XPrk*rXCrvbhz-pT+l|vKJ<;i}-4(`,?o*-yTWS_XsIp{kAUpT%,QPth4Z' );
define( 'NONCE_KEY',        '$QN;m.a*Mk`/kiUk70cq2!$4,dt9lK@HPP?ruke!! ^<R>a* @w!.4J}c6Os/Woh' );
define( 'AUTH_SALT',        'in`TOn5QHM55p#-z/;H}r7G`r.Z<Q,K7n%bg`J&7Y5?!h/Z&mb6)^hw3.ZS)S^7T' );
define( 'SECURE_AUTH_SALT', 'AJ2vEE[R-X_LR}#27L_-4--rbLIn-Qs:P~@~~{3x+SQX|65qP,jerP.5sLn2M#om' );
define( 'LOGGED_IN_SALT',   'Kb)@`<zTF``)m9W41]CySo5 BZ=5{WP6_LVSYp--hUJ n6XlJ=e?`jJI`[Ua#Wt@' );
define( 'NONCE_SALT',       ';I.}`aD!-aTGGkK5$5f$k#?bP;EsgBd7?}sjo.a{RP9AN9KalgFa^m^GPd~kM:bk' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'mdk_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
