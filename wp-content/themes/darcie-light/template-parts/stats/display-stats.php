<?php
/**
 * The template for displaying stats content
 *
 * @package Darcie
 */
?>

<?php

$enable_content = get_theme_mod( 'darcie_stats_option', 'disabled' );

if ( ! darcie_check_section( $enable_content ) ) {
	// Bail if stats content is disabled.
	return;
}

$darcie_title          = get_theme_mod( 'darcie_stats_archive_title', esc_html__( 'We always ready
for a challenge.', 'darcie-light' ) );
$darcie_description    = get_theme_mod( 'darcie_stats_description' );
$darcie_stats_subtitle = get_theme_mod( 'darcie_stats_subtitle' );

$classes[] = 'stats-section';
$classes[] = 'section';

if ( ! $darcie_title  && ! $darcie_description ) {
	$classes[] = 'no-section-heading';
}
?>

<div id="stats-section" class="<?php echo esc_attr( implode( ' ', $classes ) ); ?>">
	<div class="wrapper">
		<div class="stats-content-area">
			<?php if ( $darcie_title || $darcie_description ) : ?>
				<div class="section-heading-wrapper">
					<?php if ( $darcie_title ) : ?>
						<div class="section-title-wrapper">
							<h2 class="section-title"><?php echo wp_kses_post( $darcie_title ); ?></h2>
						</div><!-- .page-title-wrapper -->
					<?php endif; ?>

					<?php if ( $darcie_description ) : ?>
						<div class="section-description">
							<p><?php echo wp_kses_post( $darcie_description ); ?></p>
						</div><!-- .section-description -->
					<?php endif; ?>

					<?php if( $darcie_stats_subtitle ) : ?>
						<div class="section-subtitle">
							<?php echo wp_kses_post( $darcie_stats_subtitle ); ?>
						</div><!-- .section-description -->
					<?php endif; ?>

					<?php
						$target = get_theme_mod( 'darcie_stats_target' ) ? '_blank': '_self';
						$darcie_link   = get_theme_mod( 'darcie_stats_link', '#' );
						$text   = get_theme_mod( 'darcie_stats_text' );

						if ( $text ) :
					?>

					<p class="more-link">
						<a class="button" target="<?php echo $target; ?>" href="<?php echo esc_url( $darcie_link ); ?>">
						<?php echo esc_html( $text ); ?>
						</a>
					</p>
					<?php endif; ?>

				</div><!-- .section-heading-wrapper -->
			<?php endif; ?>

			<div class="section-content-wrapper stats-content-wrapper layout-two">

				<?php
				get_template_part( 'template-parts/stats/post-types-stats' );
				?>
			</div><!-- .section-content-wrapper -->
		</div><!-- .stats-content-area -->	
	</div><!-- .wrapper -->
</div><!-- #stats-section -->
