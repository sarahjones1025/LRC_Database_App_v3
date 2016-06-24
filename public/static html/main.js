var toggleButton  = document.querySelector( ".toggle_button" );
var resultList    = document.querySelector( ".result_list" );
var mainSelector  = document.querySelector( ".main_selector" );
var cc1 		  = document.getElementById( "core_competency_1" );
var cc2 		  = document.getElementById( "core_competency_2" );
var cc3 		  = document.getElementById( "core_competency_3" );
var cc4 		  = document.getElementById( "core_competency_4" );
var container     = document.getElementById( "lesson_results");
var newLi		  = document.createElement( "li" );


$('.toggle_button').click(function () {
$(this).closest('.main_selector').find('.result_list').toggle();
});


var expandList = function expandList( e ){

	resultList.classList.toggle( "show" );

	if(resultList.classList.contains( "show" )){
		mainSelector.classList.add( "red_fill" );
	}

	else{
		mainSelector.classList.remove( "red_fill" );
	}

	e.preventDefault();
};


toggleButton.addEventListener( "click", expandList );


var addFields = function addFields(){

	container.appendChild( newLi );
	newLi.innerText = "This will have lesson info";

};


var createList = function createList( e ){

	e.classList.toggle( "checked" );

	if(e.classList.contains( "checked" )){
		addFields();
	}

};

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
















