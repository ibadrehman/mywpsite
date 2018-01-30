<?php

add_action( 'genesis_meta', 'my_homepage_setup' );
/**
 * Add widget support for homepage.
 *
 */
function my_homepage_setup() {

	if ( is_active_sidebar( 'front-page-1' ) )  {

		 //* Add front page 1 widget
		add_action( 'genesis_after_header', 'display_front_page_1_widget' );

	}
}


// Add markup to display front page widgets.
function display_front_page_1_widget() {

	genesis_widget_area( 'front-page-1', array(
		'before' => '<div class="front-page-1-widget"><div class="wrap">',
		'after'  => '</div></div>',
	) );

}



add_action( 'genesis_before_content', 'ng_home_page_widgets' );





//* Add the home widgets in place

function ng_home_page_widgets() {
 	if ( is_front_page('') )
	genesis_widget_area ('content-1', array(
		'before' => '<div class="one-third first hometopcol toplefthome">',
		'after' => '</div>',));
	if ( is_front_page('') )
	genesis_widget_area ('content-2', array(
		'before' => '<div class="one-third  hometopcol topmiddlehome">',
		'after' => '</div>',));
	if ( is_front_page('') )
	genesis_widget_area ('content-3', array(
		'before' => '<div class="one-third  hometopcol toprighthome">',
		'after' => '</div>',));
	}


	




genesis();