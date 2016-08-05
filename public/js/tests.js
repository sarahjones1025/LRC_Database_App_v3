if ( 
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
        //Checking passed criterion (the item checked)
       
        // for (var prop in obj) {

        //    if (obj[prop] === criterion) {
                // &&  obj."Course"            === array is empty || < array contains that thing over there
                // &&  obj."Core Competencies" === array is empty || < array contains that thing over there
                // &&  obj."WTSP"              === array is empty || < array contains that thing over there
                // &&  obj."IndividualTask"    === array is empty || < array contains that thing over there
                // &&  obj."CollectiveTask"    === array is empty || < array contains that thing over there
                // &&  obj."Skill Level"       === array is empty || < array contains that thing over there
                // &&  obj."Subkey Function"   === array is empty || < array contains that thing over there
                // &&  obj."Echelon"           === array is empty || < array contains that thing over there

                //Push to our array
                bigResults.push(obj.CoreCompetencies);
                console.log(bigResults);
            
        // }
    });
}
