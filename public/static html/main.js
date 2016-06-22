var toggleButton  = document.querySelector( ".toggle_button" );
var resultList    = document.querySelector( ".result_list" );
var mainSelector  = document.querySelector( ".main_selector" );



	// resultList.forEach(function(index) {
	// 	if (index = "hi") {

	// 	}
	// })



var expandList = function expandList( e ){

	resultList.classList.toggle("show");

	e.preventDefault();
};

toggleButton.addEventListener( "click", expandList );

if(resultList.classList.contains("show")){
	mainSelector.classList.add("red_fill")
}

else{
	mainSelector.classList.remove("red_fill")
}










