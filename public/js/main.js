var contents      = $( ".contents" );
var toggleButton  = $( ".toggle_button" );
var lessonResults = $(".lesson_results");

//Clears all options (unchecks checkboxes)
$('#clearFilter').click(function(e){

	$('input:checkbox').each(function(){
		$(this).prop('checked', false);
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

contents.hide();

//Collapses all (.contents) if mouseclicks anywhere on page except within (.query)
$(document.body).on('click', function (e){

	if (!$('.query').has(e.target).length > 0){
		$('.contents').hide();
	}

});



 $(document).ready(function(){
    $("input:checkbox").click(function(){
        if ($(this).is(':checked'))
        {
            $(".instructions").html("Refine your results: (#) Lessons found");
            lessonResults.append("<li>blahblablah</li>");
        }
        else
        {
            $(".instructions").html("Select a search criterion");
        }
    });
});

//Need to adjust the above function to include the reset option
//currently the clear all criterion does not change the text back


var x = new XMLHttpRequest();
x.open('GET','data.js', true);
x.onreadystatechange = function(){
    if(x.readyState == 4){
        console.log('boom');
        var data = JSON.parse(x.responseText);
        callback(data[3]['Core Competencies (Name)']);
    }
};
x.send();

function callback(resp){
    console.log(resp);
}







