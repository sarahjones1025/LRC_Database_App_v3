var contents      = $('.contents');
var toggleButton  = $('.toggle_button');
var lessonResults = $('.lesson_results');
var lessonList    = $('.lesson_list');

var resultsUL     = document.createElement('ul');
    resultsUL.setAttribute('class', 'resultsUL');

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

//Creates variable "criterion" when a checkbox is clicked
//Changes alert above options
$(document).ready(function(){
    $("input:checkbox").click(function(){
        if ($(this).is(':checked')){
            var criterion = $(this).parent().text();
            populateResults(criterion);
            $(".instructions").html("Refine your results: (#) Lessons found");
        }
        else{  
            $(".instructions").html("Select a search criterion");
        }
    });
});

// Request for data and save it to local storage
var x = new XMLHttpRequest();
x.open('GET','data.js', true);
x.onreadystatechange = function(){
    if(x.readyState == 4){
        SaveDataToLocalStorage(x.responseText);
    }
};
x.send();

// Parsing the data back into localStorage
function SaveDataToLocalStorage(data){
    var a = [];
    // Parse the serialized data back into an aray of objects
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('session', a);
}

// Add and event listener to each UL, when clicked, it navigates to 
// the lesson page
// !! Still working on sending it the lesson name I want it to render for !!

$('.resultsUL').each(function(){
    this.addEventListener('click', function (e){
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

// Creating arrays for each object to be tested against based on checkbox clicks
$(document).ready(function(){
    $('input:checkbox').click(function(){
        var courseArray         = [];
        var coreCompetencyArray = [];
        var wtspArray           = [];
        var indTaskArray        = [];
        var colTaskArray        = [];
        var skillArray          = [];
        var subkeyArray         = [];
        var echelonArray        = [];
        $('input.courseSelectBox:checked').each(function(){
            if ( courseArray.indexOf($(this).parent().text()) === -1 ) {
                courseArray.push($(this).parent().text());
            }
        });
        $('input.coreSelectBox:checked').each(function(){
            if ( coreCompetencyArray.indexOf($(this).parent().text()) === -1 ) {
                coreCompetencyArray.push($(this).parent().text());
            }
        });
        $('input.wtspSelectBox:checked').each(function(){
            if ( wtspArray.indexOf($(this).parent().text()) === -1 ) {
                wtspArray.push($(this).parent().text());
            }
        });
        $('input.indSelectBox:checked').each(function(){
            if ( indTaskArray.indexOf($(this).parent().text()) === -1 ) {
                indTaskArray.push($(this).parent().text());
            }
        });
        $('input.colSelectBox:checked').each(function(){
            if ( colTaskArray.indexOf($(this).parent().text()) === -1 ) {
                colTaskArray.push($(this).parent().text());
            }
        });
        $('input.skillSelectBox:checked').each(function(){
            if ( skillArray.indexOf($(this).parent().text()) === -1 ) {
                skillArray.push($(this).parent().text());
            }
        });
        $('input.subkeySelectBox:checked').each(function(){
            if ( subkeyArray.indexOf($(this).parent().text()) === -1 ) {
                subkeyArray.push($(this).parent().text());
            }
        });
        $('input.echelonSelectBox:checked').each(function(){
            if ( echelonArray.indexOf($(this).parent().text()) === -1 ) {
                echelonArray.push($(this).parent().text());
            }
        });
        console.log(courseArray);
        console.log(coreCompetencyArray);
        console.log(wtspArray);
        console.log(indTaskArray);
        console.log(colTaskArray);
        console.log(skillArray);
        console.log(subkeyArray);
        console.log(echelonArray);
    });
});

// Parse the localStorage data:
var data       = JSON.parse(localStorage.session); 
//Create an array to store results

var bigResults = [];

function populateResults (criterion) {
    // Loop over all the data:
    data.forEach(function (obj){
          if( 
               ((courseArray.length         === 0) || courseArray.contains(obj.Course))
            && ((coreCompetencyArray.length === 0) || coreCompetencyArray.contains(obj.CoreCompetency))
            && ((wtspArray.length           === 0) || wtspArray.contains(obj.WTSP))
            && ((indTaskArray.length        === 0) || indTaskArray.contains(obj.IndividualTask))
            && ((colTaskArray.length        === 0) || colTaskArray.contains(obj.CollectiveTask))
            && ((skillArray.length          === 0) || skillArray.contains(obj.SkillLevel))
            && ((subkeyArray.length         === 0) || subkeyArray.contains(obj.SubkeyFunction))
            && ((echelonArray.length        === 0) || echelonArray.contains(obj.Echelon))
        ){
            console.log("Everything is empty");
        }
        else{
            console.log("Something is there")
        }

        //Push to our array
        bigResults.push(obj.CoreCompetencies);
        console.log(bigResults);
            
        // }
    });
}

// what if I say, if a prop in the object matches the criterion && the obj.

//Clears all options (unchecks checkboxes)
$('#clearFilter').click(function(e){
    $('input:checkbox').each(function(){
        $(this).prop('checked', false);
    });
    lessonList.empty();
});

// Create list items
// Set list items' html equal to the obj's LessonName, etc.:
// $("<li/>").appendTo(resultsUL).html(obj.LessonName);
// $("<li/>").appendTo(resultsUL).html('# of items');  
// $("<li/>").appendTo(resultsUL).html(obj.Course);  
// $("<li/>").appendTo(resultsUL).html(obj.IndividualTask);  
// $("<li/>").appendTo(resultsUL).html(obj.CollectiveTask);  

// Append the list item to the resultsUL ul:
// lessonList.append(resultsUL);

function populateResults (criterion) {
   if (lessonList.children().length === 0) {
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
   };
};


