<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'kristiankeaneblog');

/** MySQL database username */
define('DB_USER', 'kbk');

/** MySQL database password */
define('DB_PASSWORD', 'devin321');

/** MySQL hostname */
define('DB_HOST', 'mysql.kristiankeane.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'xPB57D&?`gOUI%%V2q&FyZDs`|V%eh;5GNFKLC5DzGoN8TMwTyc#6gYX(3~N4Nkb');
define('SECURE_AUTH_KEY',  'z87t2Y+rJ5Kq(92mj"_7W?@"bOs61Ke!kwgZsUIwRBm)PyUlhNrZ|fUzf6Ip`IRm');
define('LOGGED_IN_KEY',    '7$BE$^ykGBJjL5dJb*jGT^M9mK;M5GN&2m&^i$$:&Cmsf&&nU|d*QvSW6vGy*nat');
define('NONCE_KEY',        'Dv(|g4KO!um&#4Aw/Cil&AUs:1w7rPVc_wr~pbNS@6g3/gE)%3fFjF:1G(h!g;V"');
define('AUTH_SALT',        '3x;y)&4M4KzP+*a?L%detw)2lrSsRa|3"F4gbW&Czl9(vS_eh2l~"0`y$d#cMIvF');
define('SECURE_AUTH_SALT', '1URisY`K%uoO5gn9nJpRhCy3QHHPNW@N*f!GbcY&Hsj180;Pvzm:If(Nh*Tu8s7@');
define('LOGGED_IN_SALT',   'agMvt+Nh*;PTdgzCJ|dgDz1JVPkYtcPp+W!^+#6eM/gJRQdV*jGO6LcS1PUn+|Z#');
define('NONCE_SALT',       'V0be1@gt"FAvrwvFYg^&a*?@SAU_Prl//ZX:Ce7B|yJ32:nJ~m1;5w;Y54OJaiwy');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_zjubkm_';

/**
 * Limits total Post Revisions saved per Post/Page.
 * Change or comment this line out if you would like to increase or remove the limit.
 */
define('WP_POST_REVISIONS',  10);

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

