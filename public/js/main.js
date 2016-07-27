var contents      = $( ".contents" );
var toggleButton  = $( ".toggle_button" );
var lessonResults = $(".lesson_results");
var lessonList = $(".lesson_list");

//Clears all options (unchecks checkboxes)
$('#clearFilter').click(function(e){

	$('input:checkbox').each(function(){
		$(this).prop('checked', false);
	});

    lessonList.empty();
	
});

//Expands and hides ul which gives list of available options
toggleButton.on( "click", function( e ){

    var padres = $( this ).parent();

    padres.toggleClass('active');

    $('.main_selector').not(padres).removeClass('active');

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
$(document.body).on('click', function ( e ){

	if (!$('.query').has(e.target).length > 0){
		$('.contents').hide();
        $('.main_selector').removeClass('active');
	}

});


 $(document).ready(function(){
    $("input:checkbox").click(function(){
        if ($(this).is(':checked'))
        {
            var criterion = $(this).parent().text();
            populateResults(criterion);
            $(".instructions").html("Refine your results: (#) Lessons found");


        }
        else
        {  
            $(".instructions").html("Select a search criterion");
        }
    });
});

// Request for data and save it to local storage :
var x = new XMLHttpRequest();
x.open('GET','data.js', true);
x.onreadystatechange = function(){
    if(x.readyState == 4){
        SaveDataToLocalStorage(x.responseText);
    }
};
x.send();



function SaveDataToLocalStorage(data)
{
    var a = [];
    // Parse the serialized data back into an aray of objects
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('session', a);
}


// When you click on a checkbox, every single 'lesson', that has that
// 'course' related to it, will populate a list item:
// (in addition to what lesson, corresponding info i.e.)



// this function loops over the localStorage and populates list items when
// you click on a checkbox:

function populateResults (criterion) {

    // parse the localStorage data:
    var data = JSON.parse(localStorage.session);
    // loop over all the data:
    data.forEach(function (obj) {

        for (var prop in obj) {

        if (obj[prop] === criterion) {

    // Create an unordered list 
    var resultsUL = document.createElement('ul');

    resultsUL.setAttribute('class', 'resultsUL');


    // Create a list item
    // Set list items html equal to the obj's LessonName, etc.:
    // Append the list item to the resultsUL ul:
    
    $("<li/>").appendTo(resultsUL).html(obj.LessonName);
    $("<li/>").appendTo(resultsUL).html('# of items');  
    $("<li/>").appendTo(resultsUL).html(obj.Course);  
    $("<li/>").appendTo(resultsUL).html(obj.IndividualTask);  
    $("<li/>").appendTo(resultsUL).html(obj.CollectiveTask);  

    lessonList.append(resultsUL);  

            }
        }
    });

// Add and event listener to each UL, when clicked, it navigates to 
// the lesson page
// !! Still working on sending it the lesson name I want it to render for !!

  $('.resultsUL').each(function () {
    this.addEventListener('click', function (e) {

        var x = new XMLHttpRequest();
        x.open('GET','lesson.html', true);
        x.onreadystatechange = function(){
            if(x.readyState == 4){
        window.location = '/lesson.html';
    }
};
x.send();
    });
});

}
    

// The following function will take you to an


