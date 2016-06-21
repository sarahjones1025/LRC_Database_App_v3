var toggleButton  = document.querySelectorAll( ".toggle_button" );
var resultList    = document.querySelectorAll( ".result_list" );
var mainSelector  = document.querySelectorAll( ".main_selector" );



	// resultList.forEach(function(index) {
	// 	if (index = "hi") {

	// 	}
	// })



var expandList    = function expandList( e ){

	resultList.classList.toggle("show");

	e.preventDefault();
};

// toggleButton.addEventListener( "click", expandList );

if(toggleButton.classList = "show"){
	mainSelector.classList.add("red_fill")
}
else{
	mainSelector.classList.remove("red_fill")
}










