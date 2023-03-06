<?php
/*
 * This is the child theme for Darcie Light theme.
 *
 * (Please see https://developer.wordpress.org/themes/advanced-topics/child-themes/#how-to-create-a-child-theme)
 */
function darcie_light_enqueue_styles() {
    // Include parent theme CSS.
    wp_enqueue_style( 'darcie-style', get_template_directory_uri() . '/style.css', null, date( 'Ymd-Gis', filemtime( get_template_directory() . '/style.css' ) ) );
    
    // Include child theme CSS.
    wp_enqueue_style( 'darcie-light-style', get_stylesheet_directory_uri() . '/style.css', array( 'darcie-style' ), date( 'Ymd-Gis', filemtime( get_stylesheet_directory() . '/style.css' ) ) );

	// Load the rtl.
	if ( is_rtl() ) {
		wp_enqueue_style( 'darcie-rtl', get_template_directory_uri() . '/rtl.css', array( 'darcie-style' ), $version );
	}

	// Enqueue child block styles after parent block style.
	wp_enqueue_style( 'darcie-light-block-style', get_stylesheet_directory_uri() . '/assets/css/child-blocks.css', array( 'darcie-block-style' ), date( 'Ymd-Gis', filemtime( get_stylesheet_directory() . '/assets/css/child-blocks.css' ) ) );
}
add_action( 'wp_enqueue_scripts', 'darcie_light_enqueue_styles' );

/**
 * Add child theme editor styles
 */
function darcie_light_editor_style() {
	add_editor_style( array(
			'assets/css/child-editor-style.css',
			darcie_fonts_url(),
			get_theme_file_uri( 'assets/css/font-awesome/css/font-awesome.css' ),
		)
	);
}
add_action( 'after_setup_theme', 'darcie_light_editor_style', 11 );

/**
 * Enqueue editor styles for Gutenberg
 */
function darcie_light_block_editor_styles() {
	// Enqueue child block editor style after parent editor block css.
	wp_enqueue_style( 'darcie-light-block-editor-style', get_stylesheet_directory_uri() . '/assets/css/child-editor-blocks.css', array( 'darcie-block-editor-style' ), date( 'Ymd-Gis', filemtime( get_stylesheet_directory() . '/assets/css/child-editor-blocks.css' ) ) );
}
add_action( 'enqueue_block_editor_assets', 'darcie_light_block_editor_styles', 11 );

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function darcie_light_body_classes( $classes ) {
	// Added color scheme to body class.
	$classes['color-scheme'] = 'color-scheme-light';

	return $classes;
}
add_filter( 'body_class', 'darcie_light_body_classes', 100 );

/**
 * Change default background color
 */
function darcie_light_background_default_color( $args ) {
    $args['default-color'] = '#ffffff';

    return $args;
}
add_filter( 'darcie_custom_bg_args', 'darcie_light_background_default_color' );

/**
 * Change default header text color
 */
function darcie_light_dark_header_default_color( $args ) {
	$args['default-image'] =  get_theme_file_uri( 'assets/images/header-image.jpg' );
	$args['default-text-color'] = '#000000';

	return $args;
}
add_filter( 'darcie_custom_header_args', 'darcie_light_dark_header_default_color' );

/**
 * Override parent to add promotion headline section
 */
function darcie_sections() {
	get_template_part( 'template-parts/header/header-media' );
	get_template_part( 'template-parts/slider/display-slider' );
	get_template_part( 'template-parts/stats/display-stats');
	get_template_part( 'template-parts/portfolio/display-portfolio' );
	get_template_part( 'template-parts/hero-content/content-hero' );
	get_template_part( 'template-parts/testimonial/display-testimonial' );
	get_template_part( 'template-parts/services/display-services' );	
	get_template_part( 'template-parts/featured-content/display-featured' );
}

/**
 * Load Customizer Options
 */
require trailingslashit( get_stylesheet_directory() ) . 'inc/customizer/stats.php';
