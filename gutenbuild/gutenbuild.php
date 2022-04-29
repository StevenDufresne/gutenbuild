<?php
/**
 * Plugin Name:       Gutenbuild
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenbuild
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_gutenbuild_block_init() {
	wp_enqueue_script( 'gutenbuild-js', plugin_dir_url( __FILE__ ) . '/build/index.js', array('wp-edit-post', 'wp-element', 'wp-plugins', 'wp-primitives') );
	wp_enqueue_style( 'gutenbuild-css', plugin_dir_url( __FILE__ ) . '/build/style-index.css' );
}

add_action( 'enqueue_block_assets', 'create_block_gutenbuild_block_init' );
