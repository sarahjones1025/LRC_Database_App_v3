var toggleButton  = document.querySelector( ".toggle_button" );
var resultList    = document.querySelector( ".result_list" );
var mainSelector  = document.querySelector( ".main_selector" );
var cc1 		  = document.getElementById( "core_competency_1" );
var cc2 		  = document.getElementById( "core_competency_2" );
var cc3 		  = document.getElementById( "core_competency_3" );
var cc4 		  = document.getElementById( "core_competency_4" );
var container     = document.getElementById( "lesson_results");
var newLi		  = document.createElement( "li" );


// function to add styles to selected drop-down lists...not currently in use
// var expandList = function expandList(){

// 	mainSelector.classList.toggle( "red_fill" );

// };


toggleButton.addEventListener( "click", expandList );


var addFields = function addFields(){

	container.appendChild( newLi );
	newLi.innerText = "List of lessons will appear here.";

};


var createList = function createList( e ){

	e.classList.toggle( "checked" );

	if(e.classList.contains( "checked" )){
		addFields();
	}

	else{
	 $('#lesson_results').empty();
	}

};


// this is to demonstrate list items populating in the query result and is solely for demonstration
cc1.addEventListener( "click", function() {
	createList(cc1);
} );

cc2.addEventListener( "click", function() {
	createList(cc2);
} );

cc3.addEventListener( "click", function() {
	createList(cc3);
} );

cc4.addEventListener( "click", function() {
	createList(cc4);
} );


// expands and hides ul which gives list of available options for each category
$('.toggle_button').click(function () {
$(this).closest('.main_selector').find('.result_list').toggle();
});
















