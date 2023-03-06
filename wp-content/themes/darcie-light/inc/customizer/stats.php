<?php
/**
 * Stats options
 *
 * @package Darcie Light
 */

/**
 * Add stats content options to theme options
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function darcie_stats_options( $wp_customize ) {

    $wp_customize->add_section( 'darcie_stats', array(
			'title' => esc_html__( 'Stats', 'darcie-light' ),
			'panel' => 'darcie_theme_options',
		)
	);

	darcie_register_option( $wp_customize, array(
			'name'              => 'darcie_stats_option',
			'default'           => 'disabled',
			'sanitize_callback' => 'darcie_sanitize_select',
			'choices'           => darcie_section_visibility_options(),
			'label'             => esc_html__( 'Enable on', 'darcie-light' ),
			'section'           => 'darcie_stats',
			'type'              => 'select',
		)
	);

	darcie_register_option( $wp_customize, array(
			'name'              => 'darcie_stats_archive_title',
			'default'           => esc_html__( 'We always ready for a challenge.', 'darcie-light' ),
			'sanitize_callback' => 'wp_kses_post',
			'active_callback'   => 'darcie_is_stats_active',
			'label'             => esc_html__( 'Title', 'darcie-light' ),
			'section'           => 'darcie_stats',
			'type'              => 'text',
		)
	);

	darcie_register_option( $wp_customize, array(
			'name'              => 'darcie_stats_description',
			'sanitize_callback' => 'wp_kses_post',
			'active_callback'   => 'darcie_is_stats_active',
			'label'             => esc_html__( 'Description', 'darcie-light' ),
			'section'           => 'darcie_stats',
			'type'              => 'textarea',
		)
	);

	darcie_register_option( $wp_customize, array(
			'name'              => 'darcie_stats_subtitle',
			'sanitize_callback' => 'wp_kses_post',
			'active_callback'   => 'darcie_is_stats_active',
			'label'             => esc_html__( 'Subtitle', 'darcie-light' ),
			'section'           => 'darcie_stats',
			'type'              => 'text',
		)
	);

    darcie_register_option( $wp_customize, array(
			'name'              => 'darcie_stats_number',
			'default'           => 4,
			'sanitize_callback' => 'darcie_sanitize_number_range',
			'active_callback'   => 'darcie_is_stats_active',
			'description'       => esc_html__( 'Save and refresh the page if No. of Items is changed', 'darcie-light' ),
			'input_attrs'       => array(
				'style' => 'width: 100px;',
				'min'   => 0,
			),
			'label'             => esc_html__( 'No of Items', 'darcie-light' ),
			'section'           => 'darcie_stats',
			'type'              => 'number',
			'transport'         => 'postMessage',
		)
	);

	$number = get_theme_mod( 'darcie_stats_number', 4 );

	//loop for stats post content
	for ( $i = 1; $i <= $number ; $i++ ) {
		darcie_register_option( $wp_customize, array(
				'name'              => 'darcie_stats_page_' . $i,
				'sanitize_callback' => 'darcie_sanitize_post',
				'active_callback'   => 'darcie_is_stats_active',
				'label'             => esc_html__( 'Stats Page', 'darcie-light' ) . ' ' . $i ,
				'section'           => 'darcie_stats',
				'type'              => 'dropdown-pages',
			)
		);

		darcie_register_option( $wp_customize, array(
				'name'              => 'darcie_stats_subtitle_' . $i,
				'sanitize_callback' => 'wp_kses_post',
				'active_callback'   => 'darcie_is_stats_active',
				'label'             => esc_html__( 'Subtitle #', 'darcie-light' ) . $i,
				'section'           => 'darcie_stats',
				'type'              => 'text',
			)
		);
	} // End for().

	darcie_register_option( $wp_customize, array(
			'name'              => 'darcie_stats_text',
			'sanitize_callback' => 'sanitize_text_field',
			'active_callback'   => 'darcie_is_stats_active',
			'label'             => esc_html__( 'Button Text', 'darcie-light' ),
			'section'           => 'darcie_stats',
			'type'              => 'text',
		)
	);

	darcie_register_option( $wp_customize, array(
			'name'              => 'darcie_stats_link',
			'sanitize_callback' => 'esc_url_raw',
			'active_callback'   => 'darcie_is_stats_active',
			'label'             => esc_html__( 'Button Link', 'darcie-light' ),
			'section'           => 'darcie_stats',
		)
	);

	darcie_register_option( $wp_customize, array(
			'name'              => 'darcie_stats_target',
			'sanitize_callback' => 'darcie_sanitize_checkbox',
			'active_callback'   => 'darcie_is_stats_active',
			'label'             => esc_html__( 'Open Link in New Window/Tab', 'darcie-light' ),
			'section'           => 'darcie_stats',
			'custom_control'    => 'Darcie_Toggle_Control',
		)
	);
}
add_action( 'customize_register', 'darcie_stats_options', 10 );

/** Active Callback Functions **/
if ( ! function_exists( 'darcie_is_stats_active' ) ) :
	/**
	* Return true if stats content is active
	*
	* @since Darcie Light 1.0
	*/
	function darcie_is_stats_active( $control ) {
		$enable = $control->manager->get_setting( 'darcie_stats_option' )->value();

		//return true only if previewed page on customizer matches the type of content option selected
		return darcie_check_section( $enable );
	}
endif;