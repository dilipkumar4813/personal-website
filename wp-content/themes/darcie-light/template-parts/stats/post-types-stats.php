<?php
/**
 * The template for displaying stats items
 *
 * @package Darcie
 */
?>

<?php
$number = get_theme_mod( 'darcie_stats_number', 4 );

if ( ! $number ) {
	// If number is 0, then this section is disabled
	return;
}

$args = array(
	'orderby'             => 'post__in',
	'ignore_sticky_posts' => 1 // ignore sticky posts
);

$post_list  = array();// list of valid post/page ids

$no_of_post = 0; // for number of posts

$args['post_type'] = 'page';

	for ( $i = 1; $i <= $number; $i++ ) {
		$darcie_post_id = '';

		$darcie_post_id = get_theme_mod( 'darcie_stats_page_' . $i );

		if ( $darcie_post_id && '' !== $darcie_post_id ) {
			// Polylang Support.
			if ( class_exists( 'Polylang' ) ) {
				$darcie_post_id = pll_get_post( $darcie_post_id, pll_current_language() );
			}

			$post_list = array_merge( $post_list, array( $darcie_post_id ) );

			$no_of_post++;
		}
	}

	$args['post__in'] = $post_list;

if ( 0 === $no_of_post ) {
	return;
}

$args['posts_per_page'] = $no_of_post;
$loop     = new WP_Query( $args );

if ( $loop -> have_posts() ) :
	while ( $loop -> have_posts() ) :
		$loop -> the_post();
		$subtitle = get_theme_mod( 'darcie_stats_subtitle_' . ( absint( $loop ->current_post ) + 1 ) ); 
		?>
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<div class="hentry-inner">
				<div class="entry-container-wrap">
					<div class="entry-container">
						<?php if ( $number ) :  ?>
							<header class="entry-header">
								 <h2 class="entry-title">
								 	<a href="<?php echo esc_url( get_permalink() ); ?>" rel="bookmark">
								 		<?php the_title(); ?>
								 	</a>
								 </h2>
							</header>
						<?php endif; ?>
						
						<div class="sub-title">
							<?php echo esc_html( $subtitle ); ?>
						</div>
					</div>
				</div> <!-- .entry-container-wrap -->
			</div> <!-- .hentry-inner -->
		</article> <!-- .article -->
	<?php
	endwhile;
	wp_reset_postdata();
endif;
