var contents      = $( ".contents" );
var toggleButton  = $( ".toggle_button" );


//Clears all options (unchecks checkboxes)
$('#clearFilter').click(function(e){

	$('input:checkbox').each(function(){
		$(this).prop('checked', false);
		$(this).removeClass('checked');
	});
	
});

//Expands and hides ul which gives list of available options
toggleButton.on( "click", function( e ){

    var selector = $( this ).data( "contents" );
 
	contents.not(selector).hide();

    $( selector ).fadeToggle( 100 );

    if ( $( window ).height() < 600 ){
		$( document.body ).scrollTop( $( selector ).offset().top - 130 );
    }

    e.preventDefault();

} );

//Collapses all (.contents) if mouseclicks anywhere on page except within (.query)
$(document.body).on('click', function (e){

	if (!$('.query').has(e.target).length > 0){
		$('.contents').hide();
	}
})

contents.hide();





